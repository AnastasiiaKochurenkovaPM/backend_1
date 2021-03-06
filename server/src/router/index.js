const express = require('express');
const router = express.Router();
const{ saveShelter, authForm, viewUser, logout} = require('../controllers/ShelController');
const {createAdvert, getAll, getOne, getAllShel} = require('../controllers/AdvertController')
require("dotenv").config();


router.post('/Registration', saveShelter);
router.post('/LogIn', authForm);
router.get('/Cabinet', viewUser);
router.get('/Logout', logout)



router.post('/Advert', createAdvert);
//router.get('/AllShel', getAllShel);
router.get('/AllAdvert', getAll);
router.get('/AllAdvert:id', getOne);

module.exports = router;