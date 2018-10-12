const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gifSchema = new Schema({
    name: String,
    gifURL: String
}, {
    timestamps: true
});

const Gif = mongoose.model('Gif', gifSchema);

module.exports = Gif;
