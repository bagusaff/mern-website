const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require ('dotenv').config({});

//create express server
const app = express();
const port = process.env.PORT || 1337;

//cors middleware
app.use(cors());
//allowing to pass json
app.use(express.json());

//bodyparser middleware
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

//connecting to mongodb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open',() => {
    console.log('Koneksi ke mongoDB berhasil');
});


app.listen(port,()=>{
    console.log('Server berjalan pada port:', port);
});