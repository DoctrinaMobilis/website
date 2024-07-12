const express = require('express');
const router = express.Router();
const Termin = require('../models/termine');
const Kurs = require('../models/kurse');

router.get('/termine', async (req, res) => {
  try {
    const termine = await Termin.findAll({
      include: {
        model: Kurs,
        attributes: ['kursname']
      },
      order: [
        ['datum', 'ASC'],
        ['uhrzeit', 'ASC']
      ]
    });
    res.json(termine);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

module.exports = router;
