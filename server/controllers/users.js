const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user_model.js')

const signin = async (req, res) => {
    const {email, password} = req.body

    try {
        const existingUser = await User.findOne({email})
        if(!existingUser) return res.status(404).json({ message: "No such User"})

        const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid email or password"})

        const token = jwt.sign({email: existingUser.email, id: existingUser.id}, 'test', {expiresIn: "2h"})

        res.status(200).json({result: existingUser, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Unknown error'})
    }
}

const signup = async (req, res) => {
    const {email, password, username}  = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(existingUser) return res.status(400).json({message: "User already exists. Email is already taken"});

        const hashedPassword = await bcryptjs.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, username})

        const token = jwt.sign({email: result.email, id: res._id}, 'test', { expiresIn: "2h" })

        res.status(200).json({result, token});
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Unknown error'})
    }
}

exports.signin = signin;
exports.signup = signup
