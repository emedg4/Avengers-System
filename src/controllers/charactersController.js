const characters = require('./../services/charactersService');
const event      = require('../events/events');

const getCharacters = async (req, res) => {
    try {
        const response = await characters.getFromMarvel();
        const code = response.code;
        if(code === 200){
            EventHandler.publish(new event.Fill())
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
    try {
        
        const response = await  characters.modifyCharacter(req);
        const result = {
            character: req.body,
            queryStatus: response
        }
        EventHandler.publish(new event.characterModifiedEvent(req.body))
        res.send(result);

    }
    catch(err){
        console.error(`Could not update hero. Error : ${err}`);
        res.sendStatus(500);
    }


}

const getAll = async (req, res) => {
    try {
        const all = await characters.getAll();
        res.send(all);
    }
    catch(err) {
        console.log(`Could not get the heroes. Error : ${err}`);
        res.sendStatus(500);
    }
}

const delCharacter = async (req, res) => {
    try{
        const deleted = await characters.delCharacter(req);
        EventHandler.publish(new event.characterDeletedEvent(req.body))
        res.send(deleted);
        }
    catch(err){
        console.error(`Could not delete hero. Error : ${err}`);
        res.sendStatus(500);
    }
}

module.exports.delCharacter    = delCharacter;
module.exports.getAll          = getAll;
module.exports.modifyCharacter = modifyCharacter;
module.exports.getCharacters   = getCharacters;
