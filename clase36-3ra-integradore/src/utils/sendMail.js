const { createTransport } = require('nodemailer')
const { config: {google_mail_password, google_mail_user} } = require('../config/config')

const transport= createTransport({
   service: 'gmail',
   port: 587,
   auth: {
    user: google_mail_user,
    pass: google_mail_password
   } 
})

const sendMail = async (userMail, subject, html)=>{
    return await transport.sendMail({
        from: `<Servicion de email ${google_mail_user}>`,
        to: userMail,
        subject,
        html
    })
}

module.exports = { sendMail }