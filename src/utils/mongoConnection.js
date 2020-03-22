require('dotenv').config()
const mongoose   = require('mongoose');
const heroSchema = require('../schemas/Heroe');
const hero       = mongoose.model('hero', heroSchema, 'Marvel');


const MongoConnection = () => {

    var mongoDB = 'mongodb://localhost:8000';
    mongoose.connect(mongoDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: "root",
        pass: "root",
        dbName:"Marvel"
    } );
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
        return createHeroesList(data);



}
module.exports.insert = insert;