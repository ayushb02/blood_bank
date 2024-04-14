// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ayush:av15122002@cluster0.6vdki2s.mongodb.net/")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    bookedBlood: [String],
    address: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    }
});

const bloodSchema = new mongoose.Schema({
    bloodDoner:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    bloodGroup: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    address:{
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    }
});

const Blood = mongoose.model('Blood', bloodSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Blood
};