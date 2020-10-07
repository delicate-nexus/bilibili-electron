import { app, BrowserWindow } from 'electron'
import { createHeadlessWindow } from '@e/windows'
// import registerServices from '@e/services'

let mainWindow

const isEnvProduction = process.env.NODE_ENV === 'production'

function createWindow() {
  const options = {
    height: 800,
    width: (800 * 16) / 9,
    title: '哔哩哔哩',
    transparent: true,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true
    }
  }
  mainWindow = new BrowserWindow(options)
  isEnvProduction
    ? mainWindow.loadFile('build/index.html')
    : mainWindow.loadURL('http://localhost:3000')

  isEnvProduction || mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow()
  createHeadlessWindow()
  // registerServices()
})

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
  if (mainWindow === null) createWindow()
})
