import { ipcMain } from 'electron'

export const createIpcMain = (eventName) => {
  return {
    handler: null,
    event: null,
    on(callback) {
      const handler = (event, ...args) => {
        this.event = event
        callback(...args)
      }
      this.handler = handler
      ipcMain.on(eventName, this.handler)
    },
    send(data) {
      this.event.sender.send(eventName, data)
    },
    off() {
      ipcMain.off(eventName, this.handler)
    }
  }
}
