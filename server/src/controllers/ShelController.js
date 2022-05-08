const {Shelters} = require('../model/models');
const bcrypt = require('bcryptjs');
//const Model = require('../model/RegShelter');
//const RegShelter = Model.RegShelter;
const jwt = require('jsonwebtoken');


const shelterForm = async(req,res)=>{
  await res.redirect('/registration');
}


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
    res.send({message: "Реєстрація успішна!" });
    //res.status(200)
    //const token = generateJwt(shelter.id, shelter.email, shelter.role)
    console.log(shelter);
    //return res.json({token})
} 
   }

const loginForm = async(req,res)=>{
  await res.render('/login');
}


const authForm = async(req,res)=>{
   const shelter = await Shelters.findOne({ where : {email : req.body.email }});
   if(shelter){
   const password_valid = await bcrypt.compare(req.body.password, shelter.password);
    if(password_valid){
          token = jwt.sign({ "id" : shelter.id, "email" : shelter.email}, process.env.JWT_KEY);
          console.log("Success");
          res.send({message: "Успішний вхід!"});
        //res.render( '/main' );
    } else {
         console.log("Don't true password");
         res.send( { message : "*Невірний пароль" });
      }
    
    }else{
       console.log("User don`t exist");
       res.send({ message : "Користувача не знайдено!" });
   };
}



//    const viewUser = async(req,res)=>{
//       const{id} = req.params;
//       const shelter = await Shelter.findOne({
//           where:{
//               id:id
//           },
//           raw:true
//       }).catch(error=>console.log(error))
       
//       res.render('user', {shelter})///звяття та відображення даних
//   }
   

module.exports = {
   shelterForm, saveShelter, loginForm, authForm
}