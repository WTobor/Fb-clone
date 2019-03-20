const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: String,
    body: String,
    created_time: Date
});

const Post = mongoose.model('Post', postSchema);

module.exports = {Post}