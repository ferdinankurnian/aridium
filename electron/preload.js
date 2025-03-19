const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // Tambahkan API yang ingin Anda ekspos ke renderer process di sini
}) 