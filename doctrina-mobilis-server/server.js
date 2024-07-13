const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const sequelize = require('./config/database');
const app = require('./app'); // Verwenden Sie die aktualisierte app.js
const port = process.env.PORT || 8080;

// SSL-Zertifikatsdateien laden
const sslOptions = {
  key: fs.readFileSync('/etc/ssl/private/doctrina-mobilis.key'),
  cert: fs.readFileSync('/etc/ssl/private/doctrina-mobilis.crt'),
  ca: fs.readFileSync('/etc/ssl/private/doctrina-mobilis.ca-bundle')
};

// Test der Datenbankverbindung und Start des Servers
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    https.createServer(sslOptions, app).listen(port, () => {
      console.log(`Server is running on https://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
