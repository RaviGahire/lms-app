const User = require("../model/user.model");

// ─────────────────────────────────────────
// Verify User Email
// ─────────────────────────────────────────
const verifyUser = async (email) => {

    const verifiedUser = await User.findOneAndUpdate(
        { email }, 
        { isVerified: true }, 
        { new: true }
    )     
    
    if (!verifiedUser)  throw new Error("User not found")
    return verifiedUser
}

module.exports = verifyUser;