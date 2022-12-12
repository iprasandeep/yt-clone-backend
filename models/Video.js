import mongoose from 'mongoose';

const VideSchema = new mongoose.Schema({
    userId:{
        type: String, 
        required: true,
        unique: true,
    },
    title:{
        type: String, 
        required: true,
        unique: true,
    },
    password:{
        type: String, 
        required: true,
    },
    vodeUrl :{
        type: String,
    },
    subscribers:{
        type: NUmber, 
        default: 0
    },
    views:{
        type: [String],
        default: []
    },
    tags:{
        type: [String],
        default: [],
    },
    likes: {
        likes: [String],
        default: []
    },
    dislike:{
        type: [String],
    },
    subscribedUsers:{
        type: [String]
    }
}, {timestamps: true}

);

export default mongoose.model('Video', VideSchema);
