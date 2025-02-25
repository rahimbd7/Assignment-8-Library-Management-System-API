import express from 'express';
import path from 'path';
import { BooksRouter } from '../modules/Book/book.route';
import { MembersRouter } from '../modules/Memeber/member.route';



const router = express.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: BooksRouter
    },
    {
        path: '/members',
        route: MembersRouter
    }

]



moduleRoutes.forEach(route => {
    router.use(route.path, route?.route)
})

export default router;