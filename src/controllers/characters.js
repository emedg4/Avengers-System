const characters = require('./../services/characters');

const getCharacters = async (req,res) => {
    response = await characters.get();
    res.send(response);
}

module.exports.getCharacters = getCharacters;
