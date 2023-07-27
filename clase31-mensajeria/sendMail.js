const nodemailer = require('nodemailer')
const { config } = require('../config/config.js')

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmail_user_app,
        pass: config.gmail_pass_app
    }
})

exports.sendMail = async () => {
    
    return await transport.sendMail({
        from: 'Coder Test <projectodigitalgen@gmail.com>',
        to: 'projectodigitalgen@gmail.com',
        subject: 'Correo electrónico de prueba',
        html: `<h1>ESto es un correo de prueba</h1>`,
        attachments: [{
            filename: 'nodejs.png',
            path: __dirname+'/nodejs.png',
            cid: 'nodejs'
        }]
    })
}


