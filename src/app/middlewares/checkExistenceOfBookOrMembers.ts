import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import AppError from "../errors/AppError";


const prisma = new PrismaClient();

const checkBookAvailability = async (req: Request, res: Response, next: NextFunction) => {
  const { bookId } = req.params;

  try {
    // Check if book exists
    const book = await prisma.book.findUnique({ where: { bookId } });

    if (!book) {
      return next(new AppError(404, "Book not found"));
    }


    next();
  } catch (error) {
    next(new AppError(500, "Something went wrong while checking book availability"));
  }
};


const checkMemberAvailability = async (req: Request, res: Response, next: NextFunction) => {
  const { memberId } = req.params;

  try {
    // Check if member exists
    const member = await prisma.member.findUnique({ where: { memberId } });

    if (!member) {
      return next(new AppError(404, "Member not found"));
    }

    // If the member exists, proceed to the next middleware/controller
    next();
  } catch (error) {
    next(new AppError(500, "Something went wrong while checking member availability"));
  }

}

const checkExistenceOfBookAndMember = async (req: Request, res: Response, next: NextFunction) => {
  const { bookId, memberId } = req.body;
  try {
    // Check if the book exists
    const book = await prisma.book.findUnique({ where: { bookId } });
    if (!book) {
      return next(new AppError(404, "Book not found"));
    }
    // Check if the member exists
    const member = await prisma.member.findUnique({ where: { memberId } });
    if (!member) {
      return next(new AppError(404, "Member not found"));
    }

    // If both exist, proceed to the next middleware/controller
    next();
  } catch (error) {
    next(new AppError(500, "Something went wrong while checking book or member availability"));
  }
};

export const checkExistenceOfBookOrMembers = {
  checkBookAvailability,
  checkMemberAvailability,
  checkExistenceOfBookAndMember
}
