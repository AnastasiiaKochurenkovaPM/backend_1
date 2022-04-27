const express = require('express');
const cors = require("cors");
const router = require('./src/router/index');

//const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require('body-parser');




const app = express();
const port = process.env.PORT|| 3031;

app.use(express.json());

app.use(
    cors({
      origin: ["http://localhost:3031"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  //app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(
    session({
      key: "user_sid",
      secret: "somesecret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 600000,
      },
    })
  );

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'hbs');////можна буде забрати
app.use('/', router);
app.use(cookieParser());

app.use((req, res, next)=>{
  if(req.cookies.user_sid && !req.session.user){
    res.clearCookie('user_sid');
  }
  next();
})

//var content = {userName: '', loggedin: false, title: "You are not logged in today",}

////замінити на існуючу сторінку
app.get('/', (req, res)=>{
   res.render('home');
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})