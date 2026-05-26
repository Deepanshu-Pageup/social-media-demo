import mongoose, { Schema } from "mongoose";
import { IVideo } from "@/types";
import { VIDEO_DIMENSIONS } from "@/types/video-modal-type";

const videoSchema = new Schema<IVideo>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
  },
  controls: {
    type: Boolean,
    default: true,
  },
  transformation: {
    height: {
      type: Number,
      default: VIDEO_DIMENSIONS.height,
    },
    width: {
      type: Number,
      default: VIDEO_DIMENSIONS.width,
    },
    quality: {
      type: Number,
      min: 1,
      max: 100,
    },
  },
});

const Video = mongoose.models?.Video || mongoose.model("Video", videoSchema);

export default Video