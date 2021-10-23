/*
File Name: app.css
Student Name: Lea Marie Magbalot
Student ID: 301145757
Date: October 23, 2021
*/


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