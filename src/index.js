require('dotenv').config
const express = require('express');
const app = express();
const characters = require('./routes/characters.router')

app.use('/characters', characters);


app.listen(process.env.PORT, () => {
    console.log(`Api listening at port ${process.env.PORT}`)
});
