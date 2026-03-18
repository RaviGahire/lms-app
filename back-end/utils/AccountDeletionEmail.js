const nodemailer = require('nodemailer');

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, HTTPS_PROXY } = process.env;

// gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false,
  // proxy:HTTPS_PROXY,
  requireTLS: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }

});


const AccountDeletionEmail = async (adminEmail, userEmail, userDetails) => {
  try {
    const info = await transporter.sendMail({
      from: `"MasterTrack" <${EMAIL_USER}>`,
      to: [adminEmail, userEmail], 
      subject: "Account Deletion Request",
      text: `User ${userDetails.email} requested account deletion.`,
      html: `
        <h2>Account Deletion Request</h2>
        <p>A user has requested to delete their account.</p>

        <p><strong>Email:</strong> ${userDetails.email}</p>
        <p><strong>User ID:</strong> ${userDetails._id}</p>

        <p>Please review and take necessary action.</p>
      `
    });

    return info;

  } catch (error) {
    console.error("Email error:", error);
    throw new Error("Failed to send deletion request email");
  }
};


module.exports = AccountDeletionEmail;