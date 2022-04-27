const express = require('express');
const router = express.Router();
const{allShelters, shelterForm, saveShelter, loginForm, authForm, viewUser} = require('../controllers/ShelController');
require("dotenv").config();
//const{loginForm} = require('../controllers/loginController')
///const userService = require('../controllers/loginController');
///const Joi = require('joi');


router.get('/', allShelters);//отримування з бд
router.get('/createShel', shelterForm);
router.post('/createShel', saveShelter);
router.get('/login', loginForm);
router.post('/login', authForm);
router.get('/user/:id', viewUser);
//router.get('/login', edit)


// router.get('/edit/:id', editUser);//отримання даних з бд для редагування
// router.post('/update/:id', updateUser);
// router.get('/user/:id', viewUser);
// router.get('/delete/:id', deleteUser);


module.exports = router;