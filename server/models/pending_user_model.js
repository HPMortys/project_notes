const mongoose = require('mongoose');

const pendingUserSchema = mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    id: { type: String},
});


const PendingUser = mongoose.model("PendingUser", pendingUserSchema)

module.exports = PendingUser;
