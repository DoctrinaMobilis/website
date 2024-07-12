const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

const sequelize = require('./config/database');

// Middleware to parse JSON
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../doctrina-mobilis-client/build')));

// API routes
app.use('/api', require('./routes/api'));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../doctrina-mobilis-client/build', 'index.html'));
});

// Test the database connection and start the server
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
