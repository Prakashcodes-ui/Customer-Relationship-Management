import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

import { createUsers } from "../controllers/customerController.js";

const router = express.Router();

router.post(
    "/customer",
    authenticate,
    authorizeRoles("MANAGER"),
    createUsers
);

export default router;