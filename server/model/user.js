let mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const USER_SCHEMA = new mongoose.Schema({
    _id: String,
    name: String,
    affiliated: [{contactID: String, contactName: String}]
});

module.exports = mongoose.model('User', USER_SCHEMA);