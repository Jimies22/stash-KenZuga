import express from "express";
import userController from "../../controllers/userController.js";
import { protect, admin } from "../../middleware/authMiddleware.js";
import {
  validateUser,
  errorHandler,
  notFound,
} from "../../middleware/error_valid_Middleware.js";

const router = express.Router();

// Public routes
router.post("/create", validateUser, userController.createUser);
router.get("/search/:name", userController.searchUsersByName);

// Protected routes (require authentication)
router.get("/all", protect, userController.getAllUsers);
router.get("/:userID", protect, userController.getUserById);

// Admin only routes
router.put(
  "/update/:userID",
  protect,
  admin,
  validateUser,
  userController.updateUser
);
router.delete("/deslete/:userID", protect, admin, userController.deleteUser);

// Error Handling Middleware
router.use(notFound);
router.use(errorHandler);

export default router;
