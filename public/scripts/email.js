// const fs = require('fs');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'donotreply.midterm.12345432523@gmail.com',
        pass: 'randompass'
    },
    tls: {
        rejectUnauthorized: false
    }
});
let HelperOptions = {
    form: '"MID" <donotreply.midterm.12345432523@gmail.com>',
    to: 'tristandeering714@gmail.com',
    subject: 'Hello, world!',
    text: 'hey it worked'
};
transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("sent");
    console.log(info);
});
