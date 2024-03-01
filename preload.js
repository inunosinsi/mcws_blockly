const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld("mcwsApi", {
	sammon: () => ipcRenderer.invoke('sammon'),
	sleep: () => ipcRenderer.invoke('sleep'),
});