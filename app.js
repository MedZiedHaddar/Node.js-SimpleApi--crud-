const express= require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');


//anytime we hit a request this parser runs
app.use(express.json());

// Import routes
const postsRoute = require('./routes/posts');

//MiddleWare
app.use(cors());
app.use('/posts',postsRoute);


//Routes
app.get('/',(req,res) => {
    res.send('We are on home');
});



// connect to db

mongoose.connect(process.env.DB_CONNECTION,
 () => console.log('connected to DB'));


//how do we start listening on a server
app.listen(3000);


