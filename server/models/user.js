/*
File Name: app.css
Student Name: Lea Marie Magbalot
Student ID: 301145757
Date: October 23, 2021
*/


// require modules for the User Model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: '',
            unique: true,
            required: 'Username is required',
            trim: true
        },
        password:
        {
            type: String,
            validate: 
            [(password) => {return password && password.length > 6;}, 'Password should be longer'],
            required: 'Password is required',
            trim: true
        },
        email:
        {
            type: String,
            default: '',
            match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
            required: 'Email address is required',
            trim: true
        },
        displayName:
        {
            type: String,
            default: '',
            unique: true,
            required: 'Display name is required',
            trim: true
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);
    
//configure options for User Model
let options = ({ missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);