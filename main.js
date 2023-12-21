process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const { app, BrowserWindow } = require('electron')

const width = 1920 * 2;
const height = 1200;

const createWindow = () => {
    const win = new BrowserWindow({
      width: 600/* 2240 + 1920 */,
      height: 800/* 1080 */,
      frame: false,
      resizable: false
    })

    win.loadFile('index.html')
    win.setPosition(0,0)
    win.setSize(width, height)
    win.setMinimumSize(width, height)
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})