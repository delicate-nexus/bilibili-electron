export const getDocument = (window) => {
  return new Promise((resolve, reject) => {
    window.webContents.on('did-finish-load', () => {
      let code = `Promise.resolve(document.querySelector('.qrcode-img').innerHTML).then(data => data)`
      window.webContents.executeJavaScript(code, true).then((result) => {
        resolve(result)
      })
    })
  })
}
