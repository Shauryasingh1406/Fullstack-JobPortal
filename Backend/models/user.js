import mongoose from'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
  

const userschema= new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Please provide your name"],
        minLength:[3,"Name must contain three minimum 3 letters"],

        maxLength:[30,"Name cannot exceed  30 letters"]

    },
    email: {
        type:String,
        required:[true,"Please provide your email"],
        validate: [validator.isEmail,"Please prove a valid email"],
    },
    
})