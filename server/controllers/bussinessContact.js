/*
File Name: app.css
Student Name: Lea Marie Magbalot
Student ID: 301145757
Date: October 23, 2021
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let BussinessContact = require('../../server/models/bussinessContact');

module.exports.displayBussinessContactList = (req, res, next) => {
    BussinessContact.find((err, bussinessContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(bussinessContactList);
            res.render
            (
                'bussinessContact/list', 
                {title: 'Bussiness Contact List', BussinessContactList: bussinessContactList, displayName: req.user ? req.user.displayName : ''}
            );            
        }
    });
};

module.exports.displayAddPage = (req, res, next) => {
    res.render(
        'bussinessContact/add', 
        {title: 'Add New Bussiness Contact', displayName: req.user ? req.user.displayName : ''}
    ); 
};

module.exports.processAddPage = (req, res, next) => {
    let newContact = BussinessContact({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    BussinessContact.create(newContact, (err, BussinessContact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
            //refresh the bussiness contact list
            res.redirect('/bussiness-contact');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BussinessContact.findById(id, (err, updateContact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render
            (
                'bussinessContact/edit', 
                {title: 'Update Current Bussiness Contact', UpdateContact: updateContact, displayName: req.user ? req.user.displayName : ''}
            );
        }
    })
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = BussinessContact({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    BussinessContact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the bussiness contact list
            res.redirect('/bussiness-contact');
        }
    });
};

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BussinessContact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the bussiness contact list
            res.redirect('/bussiness-contact');
        }
    });
};