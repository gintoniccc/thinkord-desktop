const { BrowserWindow } = require('electron');

// if environment mode is not set, it will default to be in development
const mode = require('../webpack.config').mode;

exports.createControlBarWindow = () => {
    controlbar = new BrowserWindow({
        width: 462,
        height: 41,
        frame: false,
        resizable: true,
        x: 800,
        y: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    if (mode === "development") {
        // Load index.html via webpack dev server.
        controlbar.loadURL('http://localhost:3071/controlbar.html');

        // Open the DevTools.
        // controlbar.webContents.openDevTools();
    }
    else {
        // Load index.html from the file system.
        controlbar.loadFile('dist/controlbar.html');
    }

    controlbar.on('closed', () => {
        controlbar = null;
    })

    return controlbar;
}

exports.createTextWindow = () => {
    text = new BrowserWindow({
        width: 280,
        height: 180,
        x: controlbar.getPosition()[0] + 181,
        y: controlbar.getPosition()[1] - 190,
        frame: false,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    })

    if (mode === "development") {
        // Load index.html via webpack dev server.
        text.loadURL('http://localhost:3071/textwindow.html');

        // Open the DevTools.
        // home.webContents.openDevTools();
    }
    else {
        // Load index.html from the file system.
        text.loadFile('dist/textwindow.html');
    }

    return text;
}

exports.createHomeWindow = () => {
    home = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        }
    })

    if (mode === "development") {
        // Load index.html via webpack dev server.
        home.loadURL('http://localhost:3071/home.html');

        // Open the DevTools.
        // home.webContents.openDevTools();
    }
    else {
        // Load index.html from the file system.
        home.loadFile('dist/home.html');
    }

    return home;
}
