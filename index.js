import express from  'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import usersRoutes from './routes/users.js';
import videosRoutes from './routes/videos.js';
import commentsRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
const app = express()
dotenv.config()

const connect = () =>{
    
    mongoose
    .connect(process.env.MONGO)
        .then(()=>{
            console.log('Connected to DB');
        })
        .catch(err =>{
        throw err;
    })
    mongoose.set('strictQuery', false)
}
// middleware 
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', usersRoutes)
app.use('/api/videos', videosRoutes)
app.use('/api/comments', commentsRoutes)
app.use('/api/auth', authRoutes);


app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
        success: false,
        status, 
        message,
    })
})
app.listen(8801, ()=>{
    connect()
    console.log('Server Connected !')
})

