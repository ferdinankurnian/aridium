"use strict";
const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true
        },
    });
    
    mainWindow.loadURL("http://localhost:5173");

    return mainWindow;
}

app.whenReady().then(() => {
    const mainWindow = createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
