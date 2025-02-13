import UserDatabase from "../model/user.mongo.js";
import { userType } from "../utils/index.js";

async function ExistingMail(email) {
  const existingUser = await UserDatabase.findOne({ email });
  return existingUser;
}

async function ExistingUsername(name) {
  const existingUser = await UserDatabase.findOne({ name: name });
  return existingUser;
}

//save user with id, email,username,password
async function saveUser(name, email, password) {
  const user = new UserDatabase({
    name,
    email,
    password,
    type: userType.loggedin,
  });
  return user.save();
}

async function findUserByusernameAndPassword(name, pass) {
  try {
    const user = await UserDatabase.findOne({
      username: name,
      password: pass,
    });
    return user;
  } catch (error) {
    console.error("Error finding user by username and password:", error);
    throw new Error("Database query failed");
  }
}


async function convertingAdmin(username, password) {
  try {
    const user = await UserDatabase.findOne({
      username: username,
      password: password,
    });

    if (!user) {
      throw new Error("User not found");
    }

    user.isAdmin = true;

    await user.save();
  } catch (error) {
    console.error("Error finding user by username and password:", error);
    throw new Error("Database query failed");
  }
}

async function getUserDetailsByuserid(id) {
  try {
    const user = await UserDatabase.findOne({
      _id: id,
    });
    return user;
  } catch (error) {
    console.error("Error finding user by username and password:", error);
    throw new Error("Database query failed");
  }
}

export {
  ExistingMail,
  saveUser,
  ExistingUsername,
  findUserByusernameAndPassword,
  convertingAdmin,
  getUserDetailsByuserid,
};
