var mongoose = require('mongoose')
mongoose.Promise=Promise;
var todoschema = new mongoose.Schema({
  id: Number,
  complete:{
    type:Boolean,
    default:false
  },
  data: String
});

var todo = mongoose.model("todo", todoschema);


module.exports = todo