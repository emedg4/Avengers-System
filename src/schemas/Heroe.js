const mongoose = require('mongoose');

module.exports.heroSchema = new mongoose.Schema ({
    name: String,
    description: String,
    imageURL: String
});

