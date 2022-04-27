const Shelter = require('../model/RegShelter');
const bcrypt = require('bcryptjs');
//const Model = require('../model/RegShelter');
//const RegShelter = Model.RegShelter;
const jwt = require('jsonwebtoken');

///для відображення в одному місті всіх даних з бд
const allShelters = async(req,res)=>{
   const shelters = await Shelter.findAll({
      raw:true
   }).catch(error=>console.log(error))
    await res.render('home', {shelters});
}

const shelterForm = async(req,res)=>{
  await res.render('createShel');
}


const saveShelter = async(req,res)=>{
   const salt = bcrypt.genSaltSync(10);
   //const {email} = req.body.email;
   const emailExist = await Shelter.findOne({
      where: {email:req.body.email}
   }).catch((err) => {
      console.log(err);
    });

    if (emailExist) {
      return res.json({ message: "This email already register" });
    } else {
      const shelter = await Shelter.create({
         nameShelter: req.body.nameShelter,  
         city: req.body.city, 
         email: req.body.email,
         phone: req.body.phone,  
         password1: bcrypt.hashSync(req.body.password1, salt), 
         password2: bcrypt.hashSync(req.body.password2, salt), 
    }).catch(error=>console.log(error));
    console.log(shelter);
 res.redirect('/');//сторінка на яку переведе після дій (render якщо залишаємося на цій сторінці, redirect-якщо преходимо на іншу сторінку)
    }   
}

const allUser = async(req,res)=>{
   const shelters = await Shelter.findAll({
      raw:true
   }).catch(error=>console.log(error))
    await res.render('home', {shelters});
}

const loginForm = async(req,res)=>{
  await res.render('login');
}


const authForm = async(req,res)=>{
    const shelter = await Shelter.findOne({ where : {email : req.body.email }});
    if(shelter){
      const password_valid = await bcrypt.compare(req.body.password1, shelter.password1);
      if(password_valid){
           token = jwt.sign({ "id" : shelter.id, "email" : shelter.email}, process.env.JWT_KEY);
          //res.status(200).json({ token : token });
          res.render('user');
      } else {
         res.status(400).json({ error : "Password Incorrect" });
    }
    
    }else{
    res.status(404).json({ error : "User does not exist" });
    
    };
   }

   const viewUser = async(req,res)=>{
      const{id} = req.params;
      const shelter = await Shelter.findOne({
          where:{
              id:id
          },
          raw:true
      }).catch(error=>console.log(error))
       
      res.render('user', {shelter})///звяття та відображення даних
  }
   

module.exports = {
    allShelters, shelterForm, saveShelter, loginForm, allUser, authForm, viewUser
}



// $('#password, #confirm_password').on('keyup', function () {
//    if ($('#password').val() == $('#confirm_password').val()) {
//      $('#message').html('Matching').css('color', 'green');
//    } else 
//      $('#message').html('Not Matching').css('color', 'red');
//  });
//  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
//  <label>password :
//    <input name="password" id="password" type="password" />
//  </label>
//  <br>
//  <label>confirm password:
//    <input type="password" name="confirm_password" id="confirm_password" />
//    <span id='message'></span>
//  </label>