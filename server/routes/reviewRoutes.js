const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", isAuthenticated, reviewController.getReviews);
router.get("/:id", isAuthenticated, reviewController.getReviewById);
router.post("/", isAuthenticated, reviewController.createReview);
router.put("/:id", isAuthenticated, reviewController.updateReview);

module.exports = router;