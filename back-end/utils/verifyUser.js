const User = require("../model/user.model");

const verifyUser = async (email) => {
    try {
        const verifiedUser = await User.findOneAndUpdate({ email }, { isVerified: true }, { new: true })
        
        if (!verifiedUser) {
            throw new Error("User not found");
        }

        return verifiedUser

    } catch (error) {
        throw error;
    }

}

module.exports = verifyUser;