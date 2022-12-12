import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    videoId: { 
    type: String,
    require: true
    },
    desc: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Comment', CommentSchema);
