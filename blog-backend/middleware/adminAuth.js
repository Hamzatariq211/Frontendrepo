// Simple admin password protection middleware
module.exports = function (req, res, next) {
    const { adminPassword } = req.body;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // Store in .env for security
  
    if (adminPassword === ADMIN_PASSWORD) {
      next();
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
  