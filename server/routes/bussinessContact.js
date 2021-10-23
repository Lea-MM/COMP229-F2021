let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');
let bussContactController = require('../controllers/bussinessContact');

//helper function for guard purposes
function requireAuth(req, res, next) 
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
};

/* GET Route for the Bussiness Contact List page - READ Operation */
router.get('/', requireAuth, bussContactController.displayBussinessContactList);

/* GET Route for displaying the Add page - Create Operation */
router.get('/add', requireAuth, bussContactController.displayAddPage);

/* POST Route for processing the Add page - Create Operation */
router.post('/add', requireAuth, bussContactController.processAddPage);

/* GET Route for displaying the Edit page - Update Operation */
router.get('/edit/:id', requireAuth, bussContactController.displayEditPage);

/* POST Route for processing the Edit page - Update Operation */
router.post('/edit/:id', requireAuth, bussContactController.processEditPage);

/* GET Route to perform Deletion - Delete OPeration */
router.get('/delete/:id', requireAuth, bussContactController.performDelete);

module.exports = router;