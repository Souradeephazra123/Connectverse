import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ExistingMail, saveUser } from "../model/user.model.js";

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    //if none of it absent return error
    if (!name || !email || !password) {
      return res.status(400).send({ messsage: "Please fill all the fields" });
    }

    //if email already exists return error
    const emailExists = await ExistingMail(email);

    if (emailExists) {
      return res.status(400).send({ message: "Email already exists" });
    }

    //if password length is less than 6 return error
    if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password should be atleast 6 characters long" });
    }

    //encrypting the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = saveUser(name, email, hashedPassword);

    const messageBody = {
      message: "User created successfully",
      username: user.name,
    };

    return res.status(201).json(messageBody);
  } catch (err) {
    console.log("Unable to create user", err);
    return res.status(400).json({ message: "Unable to create user" });
  }
}

async function signin(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        msg: "Please provide all required details",
      });
    }

    const isUserExist = await ExistingMail(email);
    if (!isUserExist) {
      return res.status(401).json({
        message: "User does not exist",
      });
    }

    //compare password
    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExist.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const user = isUserExist;

    //if user email and password match then create token
    const token = jwt.sign(
      { id: user._id, username: user.name, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      message: "Login successful",
      status_code: 200,
      user_id: user._id,
      access_token: token,
    });
  } catch (error) {
    // If an error occurs, ensure no response was sent before
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export { signup, signin };
