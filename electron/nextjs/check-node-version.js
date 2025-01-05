// Create a simple script to log Node.js version in Electron
// save this as check-node-version.js
const { app } = require('electron');

app.whenReady().then(() => {
  console.log(`Node.js version: ${process.versions.node}`);
  app.quit();
});
