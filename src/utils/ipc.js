import { useCallback, useEffect } from 'react'
import { ipcRenderer } from 'electron'

export const createIpcHook = (eventName, { once } = {}) => {
  return (callback, params) => {
    const setupListener = useCallback(() => {
      const handler = (...args) => {
        callback(...args)
      }
      ipcRenderer.send(eventName, ...params)
      if (once) {
        ipcRenderer.once(eventName, handler)
      } else {
        ipcRenderer.on(eventName, handler)
        return () => {
          ipcRenderer.off(eventName, handler)
        }
      }
    }, [callback, params])
    useEffect(setupListener, [])
  }
}
