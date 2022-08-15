const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        show: false
    })
    window.loadFile('src/index.html')
    window.on('ready-to-show', window.show)
}

app.whenReady().then(() => {
    createWindow()
})