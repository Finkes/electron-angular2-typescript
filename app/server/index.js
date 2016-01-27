/// <reference path="./typings/tsd.d.ts" />
'use strict';
var electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
});
app.on("ready", () => {
    mainWindow = new BrowserWindow({ width: 1280, height: 786 });
    mainWindow.loadURL('file://' + __dirname + '/../index.html');
    // Open the DevTools.
    mainWindow.webContents.openDevTools();
});
//# sourceMappingURL=index.js.map