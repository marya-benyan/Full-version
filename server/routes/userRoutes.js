const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/authMiddleware");

// Public routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

// Protected routes
router.post("/logout", isAuthenticated, userController.logoutUser);
router.get("/:id", isAuthenticated, userController.getUserById);

module.exports = router;