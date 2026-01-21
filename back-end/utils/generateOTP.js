const generateOTP = async () => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
  } catch (error) {
    console.error('Error generating OTP:', error);
    throw error;
  }
};

module.exports = generateOTP;
