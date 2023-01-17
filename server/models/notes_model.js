const mongoose = require('mongoose')

const postSheme = mongoose.Schema({
    title: { type: String},
    text: { type: String},
    id: {type: String},
    user_id: {type: String}
})


const PostMessage = mongoose.model('Notes', postSheme)


module.exports = PostMessage;
