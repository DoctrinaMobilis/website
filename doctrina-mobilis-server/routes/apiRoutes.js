const express = require('express');
const router = express.Router();

// Importieren der Routen
const termineRouter = require('./termine');
const testRoute = require('./testRoute'); 

// API-Routen registrieren
router.use('/termine', termineRouter);
router.use('/test', testRoute);

module.exports = router;
