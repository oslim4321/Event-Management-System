const mongoose = require('mongoose');

// Define the Comment schema
const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model (if you have one)
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event', // Reference to the Event model
        required: true,
    },

}, { timestamps: true });


export default mongoose.model.Comment || mongoose.model("'Comment", commentSchema)