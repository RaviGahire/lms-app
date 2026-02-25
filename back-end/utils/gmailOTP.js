const nodemailer = require('nodemailer');

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS,HTTPS_PROXY } = process.env;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: false,
    proxy:HTTPS_PROXY,
    requireTLS: true,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }

});

const gmailOTP = async (userEmail,otp) => {
// console.log('from email otp',userEmail)

    try {
        await transporter.verify();
        // console.log('Email transporter is ready to send emails');

    const info = await transporter.sendMail({
  from: `"MasterTrack Account Verification" <${EMAIL_USER}>`,
  to: userEmail,
  subject: "🔐 Verify Your Account - OTP Code",
  text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
  html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 30px;">
      <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="text-align: center; color: #4f46e5; margin-bottom: 20px;">
          MasterTrack Account Verification
        </h2>

        <p style="font-size: 16px; color: #333;">
          Hello Sir 👋,
        </p>

        <p style="font-size: 16px; color: #555;">
          Use the OTP below to verify your account. This code is valid for 
          <strong>5 minutes</strong>.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <span style="display: inline-block; font-size: 28px; letter-spacing: 6px; font-weight: bold; background: #eef2ff; color: #4f46e5; padding: 15px 25px; border-radius: 8px;">
            ${otp}
          </span>
        </div>

        <p style="font-size: 14px; color: #777;">
          If you did not request this code, please ignore this email.
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

        <p style="font-size: 12px; color: #aaa; text-align: center;">
          © ${new Date().getFullYear()} MasterTrack LMS. All rights reserved.
        </p>

      </div>
    </div>
  `
});
        // console.log('Test email sent:', info.messageId);


    } catch (error) {
        console.error('Error with email transporter:', error);
    }
}


module.exports = gmailOTP;