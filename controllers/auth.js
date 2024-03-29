import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next)=>{
    console.log(req.body)
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash })

        await newUser.save();
        res.status(200).send('User has been created!')
    }catch(err){
        next(createError(404, ' Sorry request Not Found!'));
        // 
    }
};
// sign-in
export const signin = async (req, res, next)=>{
    
    try{  
        const user = await User.findOne({name: req.body.name})
        // console.log(req.body.name); 
        // console.log(user);
        if(!user) return next(createError(404, 'User not found!'));
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        // console.log(user.password);
        if(!isCorrect) return next(createError(400, 'Wrong credentials'));
        
        const token = jwt.sign({id:user._id}, process.env.JWT);
        const { password, ...others }  = user._doc;
        res
        .cookie('access_token', token, {
            httpOnly:true
        })
        .status(200).json(others)

    }
    catch(err)
    {
        next(err)
    }
};
