import { Router } from "express";
import {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateSingleUser,
  updateUser,
  updateUserPassword,
} from "../controllers/user.controllers.js";
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authentication.js";

const router = Router();

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin"), getAllUsers);
router.route("/showMe").get(authenticateUser, showCurrentUser);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/updateUserPassword").patch(authenticateUser, updateUserPassword);
router
  .route("/:id")
  .get(authenticateUser, getSingleUser)
  .patch([authenticateUser, authorizePermissions("admin")], updateSingleUser);
// .delete([authenticateUser, authorizePermissions("admin")], deleteProduct);
export default router;
