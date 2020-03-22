require('dotenv').config();
const express    = require('express');
const characters = require( './routes/characters.router');
const app        = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  

app.use('/characters', characters);


app.listen(process.env.PORT, () => {
    console.log(`Api listening at port ${process.env.PORT}`)
});
