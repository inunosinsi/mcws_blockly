const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld("mcwsApi", {
	sammon: (cmd, x, y, z) => ipcRenderer.invoke('sammon', [cmd, x, y, z]),
	sleep: () => ipcRenderer.invoke('sleep'),
});