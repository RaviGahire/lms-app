const Admin = require('../model/admin.model')

const createAdminProfile = async (req, res, next) => {
    try {
        const userId = req.user?._id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User not found"
            });
        }


        const admin = await Admin.findOneAndUpdate(
            { user: userId },
            {
                $setOnInsert: {
                    user: userId,
                    role: "admin",
                    isActive: true
                }
            },
            {
                upsert: true,
                new: true
            }
        );



        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in createAdminProfile middleware",
            error: error.message
        });
    }
};

const isAdmin = async (req, res, next) => {

    if (req.user?.roles !== "admin") {
        return res.status(403).json({
            success: false,
            message: "Access denied: Admin only"
        })
    }

    next()

}




module.exports = {
    isAdmin,
    createAdminProfile
};