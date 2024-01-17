/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Addresses` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Products` table. All the data in the column will be lost.
  - Added the required column `name` to the `Addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Addresses" DROP COLUMN "createdAt",
DROP COLUMN "state",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" TEXT NOT NULL;
