import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'


export const signUp = async(req, res)=>{
    const {username, email, password} = req.body
    if(!username || !email || !password || username === '' || email === '' || password === '')
    return res.status(400).json('All field must not be empty')

const hashedPassword = bcryptjs.hashSync(password, 10)
try {
        const newUser = new userModel({
            username,
            email,
            password:hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(typeof(savedUser))
        const {password, ...otherInfo} = savedUser._doc
        return res.status(200).json(otherInfo)
    } catch (error) {
        res.status(500).json(error)
    }
}