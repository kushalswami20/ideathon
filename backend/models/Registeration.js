import mongoose from "mongoose"

const registerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    collegeCity: {
        type: String,
        required: true
    },
    Degree:{
        type:String,
        required: true
    },
    yearOfStudy: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    

    
},{timestamps:true});
export const Register = mongoose.model('Register',registerSchema)