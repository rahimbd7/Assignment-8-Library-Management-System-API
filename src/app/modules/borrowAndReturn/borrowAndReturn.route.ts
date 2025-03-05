import { Router } from "express";
import { BorrowRecordController } from "./borrowAndReturn.controller";


const router = Router();

router.post("/borrow", BorrowRecordController.borrowBook);
router.post("/return", BorrowRecordController.returnBook);
router.get("/borrow/overdue", BorrowRecordController.getOverdueBorrowList);

export const BorrowRecordRouter = router;
