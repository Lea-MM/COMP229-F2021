let mongoose = require('mongoose');

// create a model class
let bussinessContactModel = mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    email: String
},
{
    collection: "bussinessContacts"
});

module.exports = mongoose.model('BussinessContact', bussinessContactModel);