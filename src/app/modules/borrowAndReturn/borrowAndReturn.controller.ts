import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowRecordService } from "./borrowAndReturnService";

const borrowBook = catchAsync(async (req: Request, res: Response) => {
  try {
    const { memberId, bookId } = req.body;
    const result = await BorrowRecordService.borrowBook(memberId, bookId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book borrowed successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: error?.message || "Failed to borrow books",
      data: null
    });
  }
});

const returnBook = catchAsync(async (req: Request, res: Response) => {
  try {
    const { borrowId } = req.body;
    await BorrowRecordService.returnBook(borrowId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book returned successfully",
      data: null,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: error?.message || "Failed to return book",
      data: null
    });
  }
});


const getOverdueBorrowList = catchAsync(async (req: Request, res: Response) => {
  try {
    const overdueBooks = await BorrowRecordService.getOverdueBorrowList();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: overdueBooks.length === 0 ? "No overdue books" : "Overdue borrow list fetched",
      data: overdueBooks,
    });
  } catch (error:any) {
    sendResponse(res, {
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Something went wrong while fetching overdue books",
      data: [],
    });
  }
});
export const BorrowRecordController = {
  borrowBook,
  returnBook,
  getOverdueBorrowList
};
