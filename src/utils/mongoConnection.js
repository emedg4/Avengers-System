require('dotenv').config()
const mongoose   = require('mongoose');
const heroSchema = require('../schemas/Heroe');
const hero       = mongoose.model('hero', heroSchema.heroSchema, 'Marvel');


const MongoConnection = () => {
    const mongoDB = process.env.MONGOURL;
    mongoose.connect(mongoDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        dbName:process.env.MONGO_DB
    });
    var mongoConnection = mongoose.connection;
        
        mongoConnection.on('error',
        (err) =>  console.log("Failed to connect to mongo", err))
        .once('open', () => console.log("Connected to database"));
        return mongoConnection;
}


const createHeroesList = (data) => {
    try {
        MongoConnection();
        data.forEach(element => {
            let avenger = new hero ({
                name: element.name,
                description: element.description,
                imageURL: element.imageURL
            });
            avenger.save((err, avenger) => {
                if (err) return err
     
            });
            
        });
        return true;
    }
    catch(err) {
        console.log(err)
        return false;
    }
}

const insert = async (data) => {
        MongoConnection();
        return createHeroesList(data);
}

const modify = async (data, filter) => {
    MongoConnection();
    return await hero.updateOne(filter, data);

}

const getAll = async () => {
    MongoConnection();
    const filter = {}
    return await hero.find(filter);
}

const deleteOne = async (filter) => {
    MongoConnection();
    return await hero.deleteOne(filter)

}

module.exports.deleteOne = deleteOne;
module.exports.getAll    = getAll;
module.exports.modify    = modify
module.exports.insert    = insert;