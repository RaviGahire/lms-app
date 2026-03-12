const authorizedRoles = (...roles) => {

  return (req, res, next) => {
 
    if (!req.user || !req.user.role) { // safety check
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }

    const userRole = req.user.role;

    
    if (!roles.includes(userRole)) { // role check
      return res.status(403).json({
        success: false,
        message: "Access denied"
      });
    }

    next();
  };

};

module.exports = authorizedRoles;
