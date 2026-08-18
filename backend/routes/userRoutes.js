import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

import {
  createUser
} from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/admin/management",
  authenticate,
  authorizeRoles("ADMIN"),
  createUser
);

export default router;