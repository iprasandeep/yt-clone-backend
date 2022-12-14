import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const update =  async (req, res, next)=>{
    if(req.params.id ===  req.user.id){
        // todo 
    try{
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            { 
                $set: req.body, 
            }, 
            {
                new: true
            }
        )
        res.status(200).json(updateUser)

    } catch(err){
        next(err);
    }

    }
    else{
        return next(createError(403, 'You can update only your account!'));
    }
}
export const deleteUser = async (req, res, next)=>{
    if(req.params.id ===  req.user.id){
        // todo 
    try{
        await User.findByIdAndDelete(
            req.params.id, 
          
        )
        res.status(200).json('User has been deleted');
    } catch(err){
        next(err);
    }
}
    else{
        return next(createError(403, 'You can delete only your account!'));
    }
    
}
export const getUser = (req, res, next)=>{
    
}
export const subscribe = (req, res, next)=>{
    
}
export const unsubscribe = (req, res, next)=>{
    
}
export const like = (req, res, next)=>{
    
}
export const dislike = (req, res, next)=>{
    
}

