const { app, BrowserWindow, ipcMain } = require('electron')
const { mcws, Events } = require('@hrtk92/mcwsjs')
const os = require('os')
const path = require('path')

function getLocalIpAddress(){
	const nets = os.networkInterfaces();
	const net = nets["eth0"]?.find((v) => v.family == "IPv4");
	return net.address;
}

const mcserver = new mcws(getLocalIpAddress(), 19131)

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

function sleepSync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
}

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

	ipcMain.handle("sleep", async (_e, _arg) => {
		sleepSync(1000);
	})

	//win.webContents.openDevTools({ mode: 'detach'})
	win.loadFile('src/template/index.html')
}

app.whenReady().then(() => {
	mcserver.createServer() // start the server
	createWindow()
})
