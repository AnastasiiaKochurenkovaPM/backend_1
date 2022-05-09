const express = require('express');
const router = express.Router();
const{ saveShelter, authForm, viewUser} = require('../controllers/ShelController');
//const {createAdvert, getAll, getOne} = require('../controllers/AdvertController')
require("dotenv").config();


router.post('/Registration', saveShelter);
router.post('/LogIn', authForm);
router.get('/Cabinet', viewUser);



//router.post('/', createAdvert);
//router.get('/', getAll);
//router.get('/:id', getOne);

module.exports = router;