
require('dotenv').config();
const express          = require('express');
const characters       = require('../controllers/charactersController');
const router           = express.Router();



router.get('/', (req, res) => {
    characters.getCharacters(req, res);
});

router.put('/', (req, res) => {
    characters.modifyCharacter(req, res);
});

router.delete('/', (req,res) => {
    characters.deleteCharacters(req,res);
});

router.get('/all', (req, res) => {
    characters.getAll(req, res);
});
module.exports = router;