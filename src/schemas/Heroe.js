const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema ({
    name: String,
    description: String,
    imageURL: String
});

module.exports.heroSchema = heroSchema;