/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BorrowRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BorrowRecord" DROP CONSTRAINT "BorrowRecord_bookId_fkey";

-- DropForeignKey
ALTER TABLE "BorrowRecord" DROP CONSTRAINT "BorrowRecord_memberId_fkey";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "BorrowRecord";

-- DropTable
DROP TABLE "Member";

-- CreateTable
CREATE TABLE "books" (
    "bookId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "publishedYear" INTEGER NOT NULL,
    "totalCopies" INTEGER NOT NULL,
    "availableCopies" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("bookId")
);

-- CreateTable
CREATE TABLE "members" (
    "memberId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "membershipDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "members_pkey" PRIMARY KEY ("memberId")
);

-- CreateTable
CREATE TABLE "borrowRecord" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3),
    "bookId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,

    CONSTRAINT "borrowRecord_pkey" PRIMARY KEY ("borrowId")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_email_key" ON "members"("email");

-- AddForeignKey
ALTER TABLE "borrowRecord" ADD CONSTRAINT "borrowRecord_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowRecord" ADD CONSTRAINT "borrowRecord_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
