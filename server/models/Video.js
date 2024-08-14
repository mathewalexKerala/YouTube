import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      require: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },

    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: Number,
      default: 32,
    },
    dislikes: {
      type: Number,
      default: 5345,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
