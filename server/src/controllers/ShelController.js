const {Shelters} = require('../model/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//реєстрація
const saveShelter = async(req,res)=>{
   const emailExist = await Shelters.findOne({
      where: {email:req.body.email}
   }).catch((err) => {
      console.log(err);
    });

     if (emailExist) {
      res.send({message: "*Ця електронна пошта вже зараєстрована!" });
   } else {
      const shelter = await Shelters.create({
         nameShelter: req.body.nameShelter,  
         city: req.body.city, 
         email: req.body.email,
         phone: req.body.phone,  
         password: bcrypt.hashSync(req.body.password, 10), 
    }).catch(error=>console.log(error));
    req.session.userId = shelter.id
    res.send({message: "Реєстрація успішна!" });
    console.log(shelter);
   } 
}

//функція логіну
const authForm = async(req,res)=>{
   const shelter = await Shelters.findOne({ where : {email : req.body.email }});
   if(shelter){
   const password_valid = await bcrypt.compare(req.body.password, shelter.password);
    if(password_valid){
          token = jwt.sign({ "id" : shelter.id, "email" : shelter.email}, process.env.JWT_KEY);
          console.log("Success");
          req.session.userId = shelter.id  
          console.log(req.session.userId);
          res.send({message: "Успішний вхід!"});
    } else {
         console.log("Don't true password");
         res.send( { message : "*Невірний пароль" });
      }
    }else{
       console.log("User don`t exist");
       res.send({ message : "Користувача не знайдено!" });
   };
}

//функція для перегляду користувача(в особистому кабінеті)
    const viewUser = async(req,res)=>{
      if (req.session.userId) {
         const id = req.session.userId;
         const shelter = await Shelters.findOne({
               where:{
                   id:id
               },
               raw:true
           }).catch(error=>console.log(error))
           console.log(shelter);
           return res.json(shelter).status(200)
        }
   }


   const logout = async(req,res)=>{
      //req.logOut();
      if(req.session.userId){

         req.session.userId === null
            console.log("Success destroy session")
            return res.json(null).status(200)
      }
   }
   

module.exports = {
   saveShelter, authForm, viewUser, logout
}