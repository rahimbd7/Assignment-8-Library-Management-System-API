import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Get all books
export const getAllBooks = async () => {
  const books = await prisma.book.findMany();
  if (books.length === 0) {
    throw new Error("No books found");
  }
  return books;

};

// Get a book by its ID


const getBookById = async (bookId: string) => {
  const book = await prisma.book.findUnique({
    where: { bookId },
  });
  return book;
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




export const BookService = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}