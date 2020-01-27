// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
// const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  const options = {
    height: 800,
    width: (800 * 16) / 9,
    // show: false, // 当window创建的时候不用打开
    // center: true,
    // fullscreenable: false,
    // resizable: false,
    title: 'PicGo',
    // vibrancy: 'ultra-dark', // 窗口模糊的样式
    transparent: true,
    titleBarStyle: 'hiddenInset', // title-bar的样式——隐藏顶部栏的横条，把操作按钮嵌入窗口
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true
    }
  }
  // Create the browser window.
  mainWindow = new BrowserWindow(options)

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  mainWindow.loadURL('http://localhost:3000')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
