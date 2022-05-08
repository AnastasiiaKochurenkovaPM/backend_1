const express = require('express');
const router = express.Router();
const{shelterForm, saveShelter, loginForm, authForm} = require('../controllers/ShelController');
//const{allAnimal, animalForm, saveAnimal, viewAnimal} = require('../controllers/AnimalController')
require("dotenv").config();
//const{loginForm} = require('../controllers/loginController')
///const userService = require('../controllers/loginController');
///const Joi = require('joi');


///router.get('/', allShelters);//отримування з бд
router.get('/Registration', shelterForm);
router.post('/Registration', saveShelter);
router.get('/LogIn', loginForm);
router.post('/LogIn', authForm);

//router.get('/animals', allAnimal);//отримування з бд
//router.get('/createAnimal', animalForm);
//router.post('/createAnimal', saveAnimal);
//router.get('/advert/:id', viewAnimal);
//router.get('/animals', checkAnimal)
//router.get('/login', edit)


// router.get('/edit/:id', editUser);//отримання даних з бд для редагування
// router.post('/update/:id', updateUser);
// router.get('/user/:id', viewUser);
// router.get('/delete/:id', deleteUser);


module.exports = router;