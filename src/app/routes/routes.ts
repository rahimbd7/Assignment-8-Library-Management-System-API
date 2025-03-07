import express, { Router } from 'express';
import path from 'path';
import { BooksRouter } from '../modules/Book/book.route';
import { MembersRouter } from '../modules/Memeber/member.route';
import { BorrowRecordRouter } from './../modules/borrowAndReturn/borrowAndReturn.route';
import notFound from '../middlewares/notFound,';
import globalErrorHandler from '../middlewares/globalErrorsHandler';



const router = express.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: BooksRouter
    },
    {
        path: '/members',
        route: MembersRouter
    },
    {
        path: '/',
        route: BorrowRecordRouter
    }

]



moduleRoutes.forEach(route => {
    router.use(route.path, route?.route)
})

router.use(globalErrorHandler);
router.use(notFound);

export default router;