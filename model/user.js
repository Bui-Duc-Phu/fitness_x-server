const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    user_name: {
        type : String,
        require: true,
        unique : true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
    },
    password: {
        type : String,
        require: true
    },
    avatar : {
        type : String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: { 
        type: Date,
        default: Date.now,
    },
})

userScheme.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
})

const User = mongoose.model('User', userScheme)

module.exports = User