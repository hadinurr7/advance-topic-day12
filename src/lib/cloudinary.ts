import * as streamifier from "streamifier";

import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../config";
import { resolve } from "path";
import { rejects } from "assert";
import { error } from "console";
import { Result } from "express-validator";

cloudinary.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUDINARY_CLOUD_NAME,
});

export const cloudinaryUpload = (file: Express.Multer.File) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};

export const cloudinaryRemove = () => {};
