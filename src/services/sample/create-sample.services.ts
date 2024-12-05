import { Sample } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export const createSampleService = async (
  body: Sample,
  image?: Express.Multer.File
) => {
  try {
    const { name, code } = body;

    return await prisma.sample.create({
      data: { name, code },
    });
  } catch (error) {
    throw error;
  }
};
