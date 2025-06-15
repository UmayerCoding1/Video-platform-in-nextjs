import mongoose, { model, Schema, models } from "mongoose";

export const VIDEO_DIMENTIONS = {
  width: 1080,
  height: 1920,
} as const;

export interface IVideo {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thubmnaiUrl: string;
  controls: boolean;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const videoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thubmnaiUrl: { type: String, required: true },
    controls: { type: Boolean, default: true },
    transformation: {
      height: { type: Number, default: VIDEO_DIMENTIONS.height },
      width: { type: Number, default: VIDEO_DIMENTIONS.width },
      quality: { type: Number, min: 1, max: 100 },
    },
  },
  { timestamps: true }
);


export const  Video = models?.Video || model<IVideo>('Video', videoSchema)