require('dotenv').config
const express = require('express');
const characters = require('../controllers/characters');
const router = express.Router();

router.get('/', (req, res) => {
    characters.getCharacters(req, res);
});

module.exports = router;