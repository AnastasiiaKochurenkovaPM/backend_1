const express = require('express');
const cors = require("cors");
const router = require('./src/router/index');
const sequelize = require('./db');
const Sequelize = require('sequelize')

const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path')


const app = express();
const port = process.env.PORT|| 3001;

app.use(cors({ credentials: true, origin: true }))

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'src/static')));
app.use(fileUpload({}));

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const database = new Sequelize("heroku_f520802781111f9", "bf7ff2ffc45a70", "80c38566", {
  host: "eu-cdbr-west-02.cleardb.net",
  logging: false,
  dialect: "mysql",
  storage: "./session.mysql"
});

const sessionStore = new SequelizeStore({
  db: database
});

app.use(
  session({
    key: "user_sid",
    secret: "somesecret",
    store: sessionStore,
    resave: false,
    rolling : true,
    saveUninitialized: true,
    cookie: {
      maxAge : 60 * 15 * 1000
    },
  })
);

app.use(cookieParser());


app.use(express.urlencoded({extended:true}));

app.use('/', router);
app.use(cookieParser());

app.use((req, res, next)=>{
  if(req.cookies.user_sid && !req.session.user){
    res.clearCookie('user_sid');
  }
  next();
})

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () =>{
      console.log(`Listening on port ${port}`);
  }) 
  } catch (e) {
    console.log(e);
  }
}

start()