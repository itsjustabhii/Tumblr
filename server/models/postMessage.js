import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    linkCount: {
        type: Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

//To turn schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage