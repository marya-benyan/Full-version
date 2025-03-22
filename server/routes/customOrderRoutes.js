const express = require("express");
const router = express.Router();
const customOrderController = require("../controllers/customOrderController");
const { isAuthenticated } = require("../middleware/authMiddleware");

router.post("/", isAuthenticated, customOrderController.createCustomOrder);
router.get("/", isAuthenticated, customOrderController.getUserCustomOrders);
router.get("/:id", isAuthenticated, customOrderController.getCustomOrderById);
router.put("/:id", isAuthenticated, customOrderController.updateCustomOrderStatus);

module.exports = router;
