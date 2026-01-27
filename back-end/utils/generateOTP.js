const generateOTP = async () => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
  } catch (error) {
    console.error('Error Generating OTP:', error);
    throw error;
  }
};

module.exports = generateOTP;
