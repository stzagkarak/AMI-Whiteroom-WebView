process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800/* 2240 + 1920 */,
      height: 600/* 1080 */,
      frame: false,
      resizable: false
    })

    win.loadFile('index.html')
    win.setPosition(0,0)
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})