const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    surname: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true, 
        minlength: [8, "Minimum password length is 8 characters"]       
    },
    role:{
        type: String,
        default: "basic",
        enum: ["basic", "supervisor", "admin"]
    },
    accessToken:{
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);