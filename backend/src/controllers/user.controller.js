import { User } from "../models/user.models.js";
import httpStatus from "http-status";
import bcrypt, { hash } from "bcrypt";
import crypto from "crypto";

export const register = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(httpStatus.FOUND)
        .json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      username: username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(httpStatus.CREATED).json({ message: "User Registered" });
  } catch (error) {
    res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: `Error Registering User, ${error}` });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ message: "Please enter valid credentials" });
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User Not Found" });

    if (bcrypt.compare(password, user.password)) {
      let token = crypto.randomBytes(20).toString("hex");
      user.token = token;
      await user.save();
      return res.status(httpStatus.OK).json({ token: token });
    }
  } catch (error) {
    res
      .status(httpStatus.LOGIN_TIME_OUT)
      .json({ message: `Log in Failed, ${error}` });
  }
};
