import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getSingleReview,
  updateReview,
} from "../controllers/review.controllers.js";
import { authenticateUser } from "../middleware/authentication.js";

const router = Router();

router.route("/").post(authenticateUser, createReview).get(getAllReviews);

router
  .route("/:id")
  .get(getSingleReview)
  .patch(authenticateUser, updateReview)
  .delete(authenticateUser, deleteReview);

export default router;
