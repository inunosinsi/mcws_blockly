const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')
const { mcws, Events } = require('@hrtk92/mcwsjs')

const mcserver = new mcws('localhost', 8000)

mcserver.onReady((host, port) => {
    console.log('Server started')
    console.log(`/wsserver ${host}:${port}`)
})

mcserver.onConnection(() => {
    console.log('Connected to Minecraft')
    mcserver.sendCommand('say Connected') // send command
    mcserver.subscribe(Events.PlayerMessage) // register events to receive
})

mcserver.onDisconnect(() => {
    console.log('Disconnected')
})

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'mcws_blockly',
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		}
	})

	ipcMain.handle("sammon", async (_e, _arg) => {
		mcserver.sendCommand('summon chicken ~ ~10 ~')
	})

	//win.webContents.openDevTools({ mode: 'detach'})
	win.loadFile('index.html')
}

app.whenReady().then(() => {
	mcserver.createServer() // start the server
	createWindow()
})