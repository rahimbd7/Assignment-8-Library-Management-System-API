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

export const BorrowRecordController = {
  borrowBook,
  returnBook,
};
