const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    number: {
        type: Number,  
        required: [true, 'Number is required'],
    }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users; 
