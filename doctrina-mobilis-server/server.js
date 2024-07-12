const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const sequelize = require('./config/database');
const app = express();
const port = process.env.PORT || 3001;

// SSL-Zertifikatsdateien laden
const sslOptions = {
  key: fs.readFileSync('/etc/ssl/private/doctrina-mobilis.key'),
  cert: fs.readFileSync('/etc/ssl/private/doctrina-mobilis.crt'),
  ca: fs.readFileSync('/etc/ssl/private/doctrina-mobilis.ca-bundle')
};

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

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
