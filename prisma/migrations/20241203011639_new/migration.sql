/*
  Warnings:

  - You are about to drop the column `description` on the `Workout` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Workout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "description",
DROP COLUMN "image",
ADD COLUMN     "difficulty" TEXT NOT NULL DEFAULT 'Beginner',
ADD COLUMN     "exercises" JSONB NOT NULL DEFAULT '[]';
