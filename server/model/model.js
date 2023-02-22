const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String 
    },
    email:{
        type: String  
    },
    address1:{
        type: String
    },
    address2:{
        type: String
    },
    city:{
        type: String
    },
    postal_code:{
        type: String 
    },
    country:{
        type: String 
    },
    user_notes:{
        type: String
    },
    birthday : Date,
    phone_number: Number, 
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;