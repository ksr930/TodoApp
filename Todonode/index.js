var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var todorouter = require('./Routes/todo');
var mongoose = require('mongoose');
var todo = require('./modules/todomodule')
var cors= require('cors')
mongoose.connect("mongodb://localhost/todonode", { useNewUrlParser: true },()=>{
    console.log('database connected')
});


var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.use('/karan',todorouter);
app.set('view engine','ejs')

app.use(cors())






app.listen(3001,()=>{
    console.log('server connected')
})