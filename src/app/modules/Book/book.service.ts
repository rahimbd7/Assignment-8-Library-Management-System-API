import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Get all books
export const getAllBooks = async () => {
  return await prisma.book.findMany();
};

// Get a book by its ID
export const getBookById = async (bookId: string) => {
  return await prisma.book.findUnique({
    where: { bookId },
  });
};

// Create a new book
export const createBook = async (data: Prisma.BookCreateInput) => {
  return await prisma.book.create({
    data,
  });
};

// Update book details
export const updateBook = async (bookId: string, data: Prisma.BookUpdateInput) => {
  return await prisma.book.update({
    where: { bookId },
    data,
  });
};

// Delete a book
export const deleteBook = async (bookId: string) => {
  return await prisma.book.delete({
    where: { bookId },
  });
};

// Check availability of a book
export const checkAvailability = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: { bookId },
  });

  if (!book) {
    throw new Error('Book not found');
  }

  return book.availableCopies > 0;
};


export const BookService = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    checkAvailability
}