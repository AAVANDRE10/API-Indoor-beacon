/*
  Warnings:

  - Added the required column `major` to the `Beacon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minor` to the `Beacon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Beacon" ADD COLUMN     "major" INTEGER NOT NULL,
ADD COLUMN     "minor" INTEGER NOT NULL;
