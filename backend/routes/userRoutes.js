import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

import {
  createUser
} from "../controllers/authController.js";
import { getAllUsers, getSingleUser, updateUsers, deleteUsers, changeRoles, changeStatu } from "../controllers/userController.js";

const router = express.Router();

//ADMIN PROCESS 
router.post(
  "/admin/management",
  authenticate,
  authorizeRoles("ADMIN"),
  createUser
);

router.get(
  "/admin/",
  authenticate,
  authorizeRoles("ADMIN"),
  getAllUsers
);

router.get(
  "/admin/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  getSingleUser
);

router.put(
  "/admin/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  updateUsers
);

router.put(
  "/admin/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  deleteUsers
);

router.put(
  "/admin/role/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  changeRoles
);

router.put(
  "/admin/status/:id",
  authenticate,
  authorizeRoles("ADMIN"),
  changeStatu
);

export default router;