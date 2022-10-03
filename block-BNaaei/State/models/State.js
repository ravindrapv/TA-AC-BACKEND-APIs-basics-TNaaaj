var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userStateSchema = new Schema({
    name:{type:String,requerd:true},
    state:String,
    continent:String,
    population:Number,
    religions:String,
    area:String,
    phoneNumber:Number,
    email:{type:String,requerd:true}
},{timestamps:true});

var State = mongoose.model('State',userStateSchema);

module.exports = State;