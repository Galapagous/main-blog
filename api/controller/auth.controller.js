import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../error.js";
import Jwt  from "jsonwebtoken";


export const signUp = async(req, res, next)=>{
    const {username, email, password} = req.body
    if(!username || !email || !password || username === '' || email === '' || password === '')
    next(errorHandler(400, 'All fields are required'))

    const hashedPassword = bcryptjs.hashSync(password, 10)
    try {
        const newUser = new userModel({
            username,
            email,
            password:hashedPassword
        })
        const savedUser = await newUser.save()
        const {password, ...otherInfo} = savedUser._doc
        return res.status(200).json(otherInfo)
    } catch (error) {
        next(error)
    }
}

export const signIn = async(req, res, next)=>{
    const {email, password} = req.body
    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400, 'All fields are required'))
    }
    try {
        const isValidUser = await userModel.find({email})
        if(isValidUser[0] === undefined) return next(errorHandler(400, 'User not found'))
        const isValidPassword = bcryptjs.compareSync(password, isValidUser[0].password)
        if(!isValidPassword) return next(errorHandler(400, 'Invalid password'))
        const {password: pass, ...otherInfo} = isValidUser[0]._doc
        const token = Jwt.sign({id: isValidUser._id}, "ThatkpandaragiBoy")
        res.status(200)
        .cookie('access_token', token, {
            httpOnly: true
        })
        .json(otherInfo)
    } catch (error) {
        next(error)
    }
}