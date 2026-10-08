/*
  Warnings:

  - You are about to drop the `TopicClassification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TopicClassification" DROP CONSTRAINT "TopicClassification_questionId_fkey";

-- DropTable
DROP TABLE "TopicClassification";
