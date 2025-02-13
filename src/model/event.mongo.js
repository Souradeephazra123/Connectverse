import mongoose from "mongoose";

const eventModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artists: {
      type: [String],
    },
    src: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventModel);
