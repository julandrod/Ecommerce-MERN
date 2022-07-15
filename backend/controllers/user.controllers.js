import { StatusCodes } from "http-status-codes";
import {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
} from "../errors/index.js";
import User from "../models/User.js";
import {
  createTokenUser,
  attachCookiesToResponse,
  checkPermissions,
} from "../utils/index.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};

export const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new NotFoundError(`No user with id: ${req.params.id}`);
  }

  checkPermissions(req.user, user._id);
  res.status(StatusCodes.OK).json({ user });
};

export const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

export const updateUser = async (req, res) => {
  const { email, name } = req.body;
  if (!email || !name) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.name = name;

  await user.save();

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

export const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new BadRequestError("Please provide both values");
  }

  const user = await User.findOne({ _id: req.user.userId });
  const isPasswordCorrect = await user.comparePassword(oldPassword);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  user.password = newPassword;

  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Success! Password Updated" });
};

export const updateSingleUser = async (req, res) => {
  const { id: userId } = req.params;
  const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    throw new NotFoundError(`No user with id: ${userId}`);
  }

  res.status(StatusCodes.OK).json({ user });
};
