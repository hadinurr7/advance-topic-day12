/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `samples` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "samples" ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "samples_image_key" ON "samples"("image");
