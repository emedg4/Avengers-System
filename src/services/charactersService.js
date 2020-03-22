require('dotenv').config()
const crypto        = require('crypto');
const fetch         = require('../utils/fetchUrl');
const mongoDB       = require('../utils/mongoConnection');
const charactersUrl = process.env.URL_GET_CHARACTERS;
const pKey          = process.env.PUBLIC_KEY;
const privKey       = process.env.PRIVATE_KEY;

/**
 * This service gets 100 characters from Marvel developers api and
 * return them in an array of objects.
 * In order to work the url you must add public key, and a timestamp and public
 * key as parameters and for third parameter you must add a hash created by
 * timestamp,privatekey, publickey, in that order.
 * @function
 * @return {Array<json>} Returns an array filled with json which represents the information
 *                       of each character
 * 
 */
const getFromMarvel = async () => {
    try {
        let data = {};
        const stringToHash = `${Date.now()}${privKey}${pKey}`
        const hash = crypto.createHash('md5').update(stringToHash).digest("hex");
        const URL = `${charactersUrl}limit=100&ts=${Date.now()}&apikey=${pKey}&hash=${hash}`
        let response = await fetch(URL);
        response = await response.json();
        if(response.code == 200 && response.status == 'Ok'){
            data = {
                code:response.code,
                status:response.status
            }
            let elements = [];
            response.data.results.forEach(element => {
                let info = {
                    id:element.id,
                    name:element.name,
                    description:element.description,
                    imageURL:`${element.thumbnail.path}/portrait_xlarge.jpg`
                };
                elements.push(info);                
            });
            data.elements = elements;
            return data;
        }
        else{
            data = {
                code:response.code,
                status:response.status
            }
        }
        return data;
        
    }
    catch(err) {
        let data = {
            status:"Error",
            error: err
        }
        return data;
    }

}


const saveAllOnDB = async (data) => {
        const insertion = await mongoDB.insert(data, "Hero");
        return insertion;
    
}

const modifyCharacter = async (data) => {
    const body = {
        name: data.body.name,
        description: data.body.description,
        imageURL: data.body.imageURL
    }
    const modify = mongoDB.modify(body, data.body._id);
    return modify;
}

const getAll = async () => {
    return await mongoDB.getAll();
}

const delCharacter = async (data) => {
    const del = mongoDB.deleteOne(data.body._id);
    return del;
}

module.exports.delCharacter    = delCharacter;
module.exports.getAll          = getAll;
module.exports.modifyCharacter = modifyCharacter;
module.exports.saveAllOnDB     = saveAllOnDB;
module.exports.getFromMarvel   = getFromMarvel;