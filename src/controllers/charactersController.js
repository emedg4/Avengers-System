const characters = require('./../services/charactersService');

const getCharacters = async (req, res) => {
    try {
        const response = await characters.getFromMarvel();
        const code = response.code;
        if(code === 200){
            const insertion = await characters.saveAllOnDB(response.elements);
            if(insertion) {
                res.sendStatus(200);
            }
            else{
                res.sendStatus(500);
            }

        }
        else{
            res.sendStatus(401);
        }

    }
    catch(err){
        console.error(`charactersController got an error : Error: ${err}`);
        res.sendStatus(500);
    }
}


const modifyCharacter = async (req, res) => {

}

module.exports.modifyCharacter = modifyCharacter;
module.exports.getCharacters   = getCharacters;
