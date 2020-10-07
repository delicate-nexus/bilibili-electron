import { BrowserWindow, ipcMain } from 'electron'
import { GET_USER_INFO } from '@/constants'

export let headlessWindow

export function createHeadlessWindow() {
  const options = {
    show: false,
    title: '哔哩哔哩',
    transparent: true,
    frame: false,
    titleBarStyle: 'hiddenInset', // title-bar的样式——隐藏顶部栏的横条，把操作按钮嵌入窗口
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true
    }
  }
  headlessWindow = new HeadlessWindow(options)
  headlessWindow.on('closed', function() {
    headlessWindow = null
  })
  ipcMain.on(GET_USER_INFO, (event) => {
    console.log(0)
    // headlessWindow.loadURL('https://passport.bilibili.com/login')
    // const url = headlessWindow.webContents.getURL()
    // event.sender.send(GET_USER_INFO, url)
    headlessWindow
      .getPageResponseBody('https://www.bilibili.com', /web-interface\/nav/)
      .then(console.log)
  })
}

class HeadlessWindow extends BrowserWindow {
  getSelectorHtml(selector) {
    const code = `
      const element = document.querySelector("${selector}")
      element ? element.innerHTML : ''
    `
    return this.executeJavaScript(code)
  }
  executeJavaScript(code) {
    return new Promise((resolve, reject) => {
      this.webContents.on('did-finish-load', () => {
        this.webContents
          .executeJavaScript(code, true)
          .then(resolve)
          .catch(reject)
      })
    })
  }
  getPageResponseBody(url, ...regs) {
    this.webContents.debugger.attach('1.1')
    this.webContents.loadURL(url)
    return new Promise((resolve, reject) => {
      console.log(0.5)
      this.webContents.debugger.on('message', (event, method, params) => {
        console.log(2, method)
        if (method === 'Network.responseReceived') {
          console.log(3, params)
          if (regs[0].test(params.response.url)) {
            this.webContents.debugger.sendCommand(
              'Network.getResponseBody',
              { requestId: params.requestId },
              (error, result) => {
                if (!error || JSON.stringify(error) === '{}') {
                  resolve(result)
                } else {
                  reject(error)
                }
              }
            )
          }
        }
      })
    })
  }
}
