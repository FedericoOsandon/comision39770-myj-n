const twilio = require('twilio')
const { config: {
    twilio_sid, 
    twilio_token, 
    twilio_phone, 
    my_phone
}} = require('../config/config')

const cliente = twilio(twilio_sid, twilio_token)

exports.sendSms = (nombre, apellido) => cliente.messages.create({
    body: `Gracias por tu compra ${nombre} ${apellido}`,
    from: twilio_phone,
    to: my_phone
})

exports.sendWhatsapp = (nombre, apellido) => cliente.messages.create({
    body: `Gracias por tu compra ${nombre} ${apellido}`,
    from: `whatsapp:+14155238886`,
    to: `whatsapp:${my_phone}`
})

