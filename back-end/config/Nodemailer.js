const MailSend = (email) => {
    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "no reply",
        text: `Purchase Item successful`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log("success");
    });
}


module.exports = MailSend