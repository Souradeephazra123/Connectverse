import mongoose from "mongoose";
import { userType } from "../utils/index.js";

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: userType.free,
    },
    
  },
  { timestamps: true }
);


export default mongoose.model("User", userModel);