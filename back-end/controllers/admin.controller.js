const Admin = require('../model/admin.model')


exports.getAdminProfile = async (req, res) => {

    const adminId = req.user?._id
    
    try {
        const admin = await Admin.findOne(adminId)
            .populate("user", "userName avatar email")

        return res.json({
            success: true,
            message: 'Hello Admin',
            admin
        })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}