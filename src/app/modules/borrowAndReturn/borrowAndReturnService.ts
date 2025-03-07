// Assuming Prisma is configured

import prisma from "../../../shared/prisma";

const borrowBook = async (memberId: string, bookId: string) => {
  return await prisma.$transaction(async (tx) => {
    const book = await tx.book.findUnique({
      where: { bookId },
    });
    if (book && book?.availableCopies < 1) throw new Error("No copies available");

    // Create a borrow record
    const borrowRecord = await tx.borrowRecord.create({
      data: {
        memberId,
        bookId,
      },
    });

    // Decrease available copies
    await tx.book.update({
      where: { bookId },
      data: {
        availableCopies: {
          decrement: 1,
        },
      },
    });

    return {
      borrowId: borrowRecord.borrowId,
      bookId: borrowRecord.bookId,
      memberId: borrowRecord.memberId,
      borrowDate: borrowRecord.borrowDate,
    };
  });
};

const returnBook = async (borrowId: string) => {
  const isExistenceOfBorrowRecord = await prisma.borrowRecord.findUnique({ where: { borrowId , returnDate: null } });
  if (!isExistenceOfBorrowRecord) throw new Error("Borrow record not found");
  return await prisma.$transaction(async (tx) => {
    const borrowRecord = await tx.borrowRecord.findUnique({
      where: { borrowId },
    });

    if (!borrowRecord) throw new Error("Borrow record not found");

    // Mark the borrow record as returned
    await tx.borrowRecord.update({
      where: { borrowId },
      data: {
        returnDate: new Date(),
      },
    });

    // Increase available copies of the book
    await tx.book.update({
      where: { bookId: borrowRecord.bookId },
      data: {
        availableCopies: {
          increment: 1,
        },
      },
    });
    return { message: "Book returned successfully" };
  });
};


const getOverdueBorrowList = async () => {
  const currentDate = new Date();

  // Get borrow records where return date is not set and borrow date is more than 14 days ago
  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null, // Not yet returned
      borrowDate: {
        lt: new Date(currentDate.setDate(currentDate.getDate() - 14)), // Overdue if borrowed more than 14 days ago
      },
    },
    include: {
      book: true, 
      member: true
    },
  });

  // Map the records to return only relevant fields for the response
  return overdueRecords.map((record) => ({
    borrowId: record.borrowId,
    bookTitle: record.book.title,
    borrowerName: `${record.member.name}`, 
    overdueDays: Math.floor(
      (currentDate.getTime() - new Date(record.borrowDate).getTime()) / (1000 * 3600 * 24)
    ), 
  }));
};

export const BorrowRecordService = {
  borrowBook,
  returnBook,
  getOverdueBorrowList
};
