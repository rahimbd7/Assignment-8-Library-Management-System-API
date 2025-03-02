// Assuming Prisma is configured

import prisma from "../../../shared/prisma";

const borrowBook = async (memberId: string, bookId: string) => {
  return await prisma.$transaction(async (tx) => {
    const book = await tx.book.findUnique({
      where: { bookId },
    });

    if (!book) throw new Error("Book not found");
    if (book.availableCopies < 1) throw new Error("No copies available");

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

export const BorrowRecordService = {
  borrowBook,
  returnBook,
};
