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

app.use(express.json());
//app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

// app.use(
//     cors({
//       origin: ["http://localhost:3001"],
//       methods: ["GET", "POST"],
//       credentials: true,
//     })
//   );

app.use(cors({ credentials: true, origin: true }))

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
  //app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    session({
      key: "user_sid",
      secret: "somesecret",
      store: sessionStore,
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60*60*24,
      },
    })
  );

app.use(express.urlencoded({extended:true}));
//app.use(express.static('src'));
///app.set('view engine', 'js');////можна буде забрати
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