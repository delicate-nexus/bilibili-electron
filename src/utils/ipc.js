import { ipcRenderer } from 'electron'

// const { ipcRenderer } = remote.require('electron')

export const ipc = {
  get(channel, ...args) {
    return new Promise((resolve, reject) => {
      const handler = (event, ...args) => {
        resolve(...args)
        ipcRenderer.removeListener(channel, handler)
      }
      ipcRenderer.send(channel, ...args)
      ipcRenderer.on(channel, handler)
    })
  }
}
