const nodemailer = require('nodemailer');

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }

});

const gmailOTP = async (userEmail,otp) => {
console.log('from email otp',userEmail)


    try {
        await transporter.verify();
        console.log('Email transporter is ready to send emails');

        const info = await transporter.sendMail({
            from: `"LMS App" <${EMAIL_USER}>`,
            to: userEmail,
            subject: 'MasterTrack OTP',
            text: 'This is a ' + otp + ' for your MasterTrack account verification.',
            html: '<h3>Your OTP is: ' + otp + '</h3>'
        });
        console.log('Test email sent:', info.messageId);


    } catch (error) {
        console.error('Error with email transporter:', error);
    }
}


module.exports = gmailOTP;