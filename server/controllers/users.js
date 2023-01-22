const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user_model.js')
const PendingUser = require('../models/pending_user_model.js')


const { sendEmailVerification } = require('../mailer/mailer.js')

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

        const result = await PendingUser.create({email, password: hashedPassword, username})

        await sendEmailVerification({toUser: result, hash: result._id})
        res.status(200).json({message: 'Email successfully verified now you can log in.'});
    } catch(error) {
        console.log(error);
        res.status(500).json({message: 'Unknown error'})
    }
}


const verification = async (req, res) => {
    const {hash} = req.params

    console.log(hash)

    try {
        const user = await PendingUser.findOne({_id: hash})

        if (!user) {
            return res.status(422).send('User cannot be activated')
        }

        console.log(user.toObject())
        
        const newUser = await User.create({username: user.username, email: user.email, password: user.password})
        await user.remove();

        res.status(200).json({newUser});
    } catch(error) {
        res.status(500).json({message: error})
    }


}

exports.signin = signin;
exports.signup = signup
exports.verification = verification