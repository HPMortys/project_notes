
const nodemailer = require('nodemailer');


exports.sendEmailVerification = function({toUser, hash}) {
    return new Promise((res, rej) => {
        console.log('mailer activated')
        
        const traporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SENDER_USER,
                pass: process.env.PASSWORD_SENDER_USER
            }
        })

        const message = {
            from: process.env.EMAIL_SENDER_USER, 
            to: process.env.EMAIL_SENDER_USER,
            subject: 'SimpleNotes Email Verification',
            html: `
                <h3>  Dear ${toUser.username}, </h3>
                <p> Thank you for your regristration into SimpleNotes </p>
                <p> Just the last step left. </p>
                <p> <b>To activate your Account please go to the link below: </b> </p>
                <a target="_" href="${process.env.DOMAIN}/user/verification/${hash}"> Verification link </a>
                <p> Best regards, </p>
                <p> SimpleNotes </p>
            `
        }

        traporter.sendMail(message, function(err, info) {
            if (err) {
                rej(err)
            } else {
                res(info)
            }
        })


    })
}
