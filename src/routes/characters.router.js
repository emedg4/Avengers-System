
require('dotenv').config();
const express = require('express');
const characters = require('../controllers/characters');
const router = express.Router();

router.get('/', (req, res) => {
    characters.getCharacters(req, res);
});

// router.post('/', (req,res) => {
//     characters.createCharacters(req,res);
// });

// router.put('/', (req, res) => {
//     characters.modifyCharacters(req, res);
// });

// router.delete('/', (req,res) => {
//     characters.deleteCharacters(req,res);
// });

// router.get('/all', (req, res) => {
//     characters.getCharacters(req, res);
// });
module.exports = router;