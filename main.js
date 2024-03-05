const { app, BrowserWindow, ipcMain } = require('electron')
const { mcws, Events } = require('@hrtk92/mcwsjs')
const os = require('os')
const path = require('path')

const mcserver = new mcws(function(){
	const nets = os.networkInterfaces();
	const net = nets["eth0"]?.find((v) => v.family == "IPv4");
	return net.address;
}(), 19131)

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

/**
 * 
 * @param {string} command
 * @param {string} target 
 * @param {string} entity
 * @param {string} x	// x座標 実数 or ^ or ~で指定
 * @param {string} y	// y座標 実数 or ^ or ~で指定
 * @param {string} z	// z座標 実数 or ^ or ~で指定
 * @returns string
 */
function build_command(command, target, entity, x, y, z){
	cmd = command+" ";
	if(target.length > 0) cmd += "@"+target+" ";
	if(entity.length > 0) cmd += entity+" ";
	cmd += x+" "+y+" "+z+" ";
	cmd = cmd.trim();
	return cmd;
}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 700,
		height:500,
		title: 'mcws_blockly',
		autoHideMenuBar: true,
		webPreferences: {
			preload: path.join(__dirname, 'src/js/preload.js'),
		}
	})

	ipcMain.handle("execute_command", async (_e, _arg) => {
		for(var _i = 0; _i < _arg.length; _i++){
			_arg[_i] = _arg[_i].replace("'", "");
		}
		mcserver.sendCommand(build_command(_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5]));
	})

	//win.webContents.openDevTools({ mode: 'detach'})
	win.loadFile('src/template/index.html')
}

app.whenReady().then(() => {
	mcserver.createServer() // start the server
	createWindow()
})
