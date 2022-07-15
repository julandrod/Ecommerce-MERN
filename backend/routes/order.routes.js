import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getCurrentUserOrders,
  getMonthlyIncome,
  getSingleOrder,
  updateOrder,
} from "../controllers/order.controllers.js";
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";

const router = Router();

router
  .route("/")
  .post(authenticateUser, createOrder)
  .get(authenticateUser, authorizePermissions("admin"), getAllOrders);

router.route("/showAllMyOrders").get(authenticateUser, getCurrentUserOrders);

router
  .route("/income")
  .get(authenticateUser, authorizePermissions("admin"), getMonthlyIncome);

router
  .route("/:id")
  .get(authenticateUser, getSingleOrder)
  .patch(authenticateUser, updateOrder);

export default router;
