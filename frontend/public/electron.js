const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800, 
    height: 480,
    fullscreen: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    },
    minimizable: false,
  });
  mainWindow.maximize();
  // mainWindow.removeMenu()
  // mainWindow.setMinimizable(false);
  // mainWindow.setMenu(false);
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});