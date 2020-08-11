let mongoose = require('mongoose');

mongoose.set('useFindAndModify', false)

const USER_SCHEMA = new mongoose.Schema({
    _id: String,
    affiliated: [String]
})
USER_SCHEMA.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.ardentID = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('User', USER_SCHEMA);