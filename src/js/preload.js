const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld("mcwsApi", {
	execute_command: (cmd, target, type, entity, x, y, z) => ipcRenderer.invoke('execute_command', [cmd, target, type, entity, x, y, z]),
	open_ws_dialog: () => ipcRenderer.invoke("open_ws_dialog"),
	receive_connect_status: (callback) => ipcRenderer.on('connect_status', (_e, _arg) => callback(_arg))
});