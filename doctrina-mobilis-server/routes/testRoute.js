// src/routes/testRoute.js
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Test route is working on the server!');
});

module.exports = router;
