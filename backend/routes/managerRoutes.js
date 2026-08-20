import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

import { createUsers, updateCustomers} from "../controllers/customerController.js";
import { createLeads } from "../controllers/LeadController.js";

const router = express.Router();

// MANAGER TO CUSTOMER
router.post(
    "/customer",
    authenticate,
    authorizeRoles("MANAGER"),
    createUsers
);

router.put(
    "/customer/:id",
    authenticate,
    authorizeRoles("MANAGER"),
    updateCustomers
);

//MANAGER TO LEAD
router.put(
    "/lead",
    authenticate,
    authorizeRoles("MANAGER"),
    createLeads
);

export default router;