import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./book.service";
import { send } from "process";


const createBook = catchAsync(async (req: Request, res: Response) => {
    const bookData = req.body;
    const result = await BookService.createBook(bookData);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Book created successfully",
        data: result
    });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
try {
    const result = await BookService.getAllBooks();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Books fetched successfully",
        data: result
    });
} catch (error:any) {
    sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: error?.message || "Failed to fetch books",
        data: null
    })
}
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const result = await BookService.getBookById(bookId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book fetched successfully",
        data: result
    });
});


const updateBook = catchAsync(async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const updateData = req.body;
    const result = await BookService.updateBook(bookId, updateData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book updated successfully",
        data: result
    });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const { bookId } = req.params;
    const result = await BookService.deleteBook(bookId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book deleted successfully",
        data: result
    })
});

export const BooksController = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};
