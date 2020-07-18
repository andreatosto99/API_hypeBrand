const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
autoIncrement = require('mongoose-auto-increment');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});

//Connect To Db
var connection = mongoose.connect(
    process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() => console.log('connected to DB!'))
.catch(err=>{
    console.log('DB Connection error', {err:message});
});

autoIncrement.initialize(connection);
//How to we start listening to the server
app.listen(3000);