import { Router } from "express";
import { BorrowRecordController } from "./borrowAndReturn.controller";
import { checkExistenceOfBookOrMembers } from "../../middlewares/checkExistenceOfBookOrMembers";


const router = Router();

router.post("/borrow",checkExistenceOfBookOrMembers.checkExistenceOfBookAndMember ,BorrowRecordController.borrowBook);
router.post("/return", BorrowRecordController.returnBook);
router.get("/borrow/overdue", BorrowRecordController.getOverdueBorrowList);

export const BorrowRecordRouter = router;
