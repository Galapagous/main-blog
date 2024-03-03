import mongoose from "mongoose";
import userModel from "../models/user.model.js";

export const getAllUsers = (req,res)=>{
    res.send('You will get user list')
}