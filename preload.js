const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld("mcwsApi", {
	execute_command: (cmd, target, entity, x, y, z) => ipcRenderer.invoke('execute_command', [cmd, target, entity, x, y, z]),
	sleep: () => ipcRenderer.invoke('sleep'),
});