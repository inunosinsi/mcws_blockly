const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const { mcws } = require('@hrtk92/mcwsjs')
const os = require('os')
const path = require('path')

let isConnect = false
let ws_connect_cmd

/**
 * 
 * @param {string} command
 * @param {string} target 
 * @param {string} type
 * @param {string} id
 * @param {string} x	// x座標 実数 or ^ or ~で指定
 * @param {string} y	// y座標 実数 or ^ or ~で指定
 * @param {string} z	// z座標 実数 or ^ or ~で指定
 * @returns string
 */
function build_command(command, target, type, id, x, y, z){
	cmd = command+" ";
	switch(command){
		case "setblock":
			if(x.length > 0) {
				if(y.length <= 0) y = "^";
				if(y.length <= 0) z = "^";
				cmd += x+" "+y+" "+z+" ";
			}
			if(id.length > 0) cmd += id+" ";
			break;
		default:
			if(target.length > 0) cmd += "@"+target+" ";
			if(type.length > 0) cmd += type+" ";
			if(id.length > 0) cmd += id+" ";
			if(x.length > 0) {
				if(y.length <= 0) y = "^";
				if(y.length <= 0) z = "^";
				cmd += x+" "+y+" "+z+" ";
			}
			break;
	}
	
	cmd = cmd.trim();
	return cmd;
}

const createWindow = () => {
	const win = new BrowserWindow({
		width:700,
		height:500,
		title: 'mcws_blockly',
		autoHideMenuBar: true,
		useContentSize: true,
		webPreferences: {
			preload: path.join(__dirname, 'src/js/preload.js'),
		}
	})

	ipcMain.handle("execute_command", async (_e, _arg) => {
		for(var _i = 0; _i < _arg.length; _i++){
			_arg[_i] = _arg[_i].replace("'", "");
		}
		cmd = build_command(_arg[0], _arg[1], _arg[2], _arg[3], _arg[4], _arg[5], _arg[6]);
		if(isConnect){
			mcserver.sendCommand(cmd);
		}else{
			console.log("Debug:["+cmd+"]")
		}
	})

	ipcMain.handle("open_ws_dialog", async (_e, _arg) => {
		return dialog
		  .showMessageBoxSync(win, {
			message: "Minecraftのチャットとコマンドで下記のコマンドを入力してください\n"+ws_connect_cmd,
		})
	})

	//win.webContents.openDevTools({ mode: 'detach'})
	win.loadFile('src/template/index.html')

	/** mcws.js **/

	const mcserver = new mcws(function(){
		const nets = os.networkInterfaces();
		const net = nets["eth0"]?.find((v) => v.family == "IPv4");
		return net.address;
	}(), 19131)
	
	mcserver.onReady((host, port) => {
		console.log('Server started')
		ws_connect_cmd = "/connect "+host+":"+port
		console.log(ws_connect_cmd)
	})
	
	mcserver.onConnection(() => {
		console.log('Connected to Minecraft')
		mcserver.sendCommand('say Connected') // send command
		isConnect = true
		win.webContents.send('connect_status', 1)
	})
	
	mcserver.onDisconnect(() => {
		console.log('Disconnected')
		isConnect = false
		win.webContents.send('connect_status', 0)
	})

	mcserver.createServer()
}

app.whenReady().then(() => {
	createWindow()
})
