const authorizeRoles = (...allowedRoles) => {

  return (req, res, next) => {
    
    const userRole = req.user?.roles;

    console.log(userRole)

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: "Access denied: You are not allowed to perform this action",
      })

    }


    next();
  }

}

module.exports = authorizeRoles;
