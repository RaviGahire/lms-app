const User = require("../model/user.model")

 const verifyUser = async (id) => {
    const verifiedUser = await User.findByIdAndUpdate(id, { $set:{isVerified: true} }, { new: true })
    // console.log(verifiedUser)
    return verifiedUser
}

module.exports = verifyUser ;