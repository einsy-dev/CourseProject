/*
  Warnings:

  - Changed the type of `type` on the `FormItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FormType" AS ENUM ('yesNo');

-- AlterTable
ALTER TABLE "FormItem" DROP COLUMN "type",
ADD COLUMN     "type" "FormType" NOT NULL;
