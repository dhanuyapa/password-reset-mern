const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dhanuyapa841@gmail.com', // Replace with your Gmail email address
        pass: 'hqmpwlqhtnyvqylx' // Replace with the app password generated for Nodemailer
    }
});

// Function to send email
function sendEmail(to, subject, text) {
    const mailOptions = {
        from: 'dhanuyapa841@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = { sendEmail };
