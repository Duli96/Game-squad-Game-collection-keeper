const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const  GameRoute = require('./routes/gameDetails');
const userRoute = require('./routes/Users');

//middleware
app.use(bodyparser.json());
app.use(cors());
app.use('/game',GameRoute);
//app.use('/users',userRoute);

//db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true,useUnifiedTopology: true},
    ()=>console.log('Database connected!')
)

app.listen(4000);