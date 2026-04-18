// ─────────────────────────────────────────
// OTP Generator Function
// ─────────────────────────────────────────
const OtpGenerator = async () => {
    const generatedOtp = Math.floor(1000 + Math.random() * 9000);
    return generatedOtp;
  };
module.exports = OtpGenerator