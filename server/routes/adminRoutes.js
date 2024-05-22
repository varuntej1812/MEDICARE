// Import the express module
const express = require("express");

// Import the adminController module, which contains the logic for handling admin-related routes
const adminController = require("../controllers/adminController");

// Create a new router object using express.Router()
const router = express.Router();

// Import the auth middleware, which handles authentication and authorization
const auth = require("../middleware/auth");

// Import the error middleware, which handles errors
const error = require("../middleware/error");

// Use the error middleware for all routes in this router
router.use(error);

// Define a route to approve a doctor with the specified docId
router.put("/approvedoctor/:docId", auth, adminController.approve);

// Define a route to cancel a doctor with the specified docId
router.put("/canceldoctor/:docId", auth, adminController.cancel);

// Define a route to post an announcement
router.post("/post-announcement", auth, adminController.postAnnouncement);

// Define a route to display all announcements
router.get("/display-announcements", adminController.getAnnouncements);

// Define a route to approve a hospital with the specified hospId
router.put("/approvehospital/:hospId", auth, adminController.approveHospital);

// Define a route to cancel a hospital with the specified hospId
router.put("/cancelhospital/:hospId", auth, adminController.rejectHospital);

// Define a route to block a user with the specified userId
router.put("/blockuser/:userId", auth, adminController.blockUser);

// Define a route to unblock a user with the specified userId
router.put("/unblockuser/:userId", auth, adminController.unblockUser);

// Define a route to get all orders
router.get("/getAllOrders", auth, adminController.getAllOrders);

// Define a route to update the delivery status of a medicine order with the specified orderId
router.put(
    "/updateDeliveryStatus/:orderId",
    auth,
    adminController.updateMedicineDeliveryStatus
);

// Export the router object so it can be used in other parts of the application
module.exports = router;
