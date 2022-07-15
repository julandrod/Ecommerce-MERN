import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import User from "../models/User.js";
import { createTokenUser, attachCookiesToResponse } from "../utils/index.js";

export const register = async (req, res) => {
  const { email } = req.body;
  const emailAlreadyExists = await User.findOne({ email });

  if (emailAlreadyExists) {
    throw new BadRequestError("Este email ya esta registrado");
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? "admin" : "user";

  const user = await User.create({ ...req.body, role });
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Por favor ingrese email y password");
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Datos de acceso invalidos");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Datos de acceso invalidos");
  }

  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
