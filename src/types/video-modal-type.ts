import mongoose from "mongoose";

export const VIDEO_DIMENSIONS = {
    height: 1920,
    width: 1080,
} as const 


export interface IVideo {
    id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    controls?: boolean;
    transformation?: {
        height: number,
        width: number,
        quality?:number
    }
}