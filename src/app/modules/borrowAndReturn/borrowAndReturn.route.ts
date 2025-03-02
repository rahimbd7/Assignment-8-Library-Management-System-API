import { Router } from "express";
import { BorrowRecordController } from "./borrowAndReturn.controller";


const router = Router();

router.post("/borrow", BorrowRecordController.borrowBook);
router.post("/return", BorrowRecordController.returnBook);

export const BorrowRecordRouter = router;
