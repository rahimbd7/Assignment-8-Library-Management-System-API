

import { Router } from 'express';
import { BooksController } from './book.controller';
import { checkExistenceOfBookOrMembers } from '../../middlewares/checkExistenceOfBookOrMembers';


const router = Router();

router.post('/', BooksController.createBook);
router.get('/', BooksController.getAllBooks);
router.get('/:bookId', checkExistenceOfBookOrMembers.checkBookAvailability ,BooksController.getBookById);
router.put('/:bookId',checkExistenceOfBookOrMembers.checkBookAvailability , BooksController.updateBook);
router.delete('/:bookId',checkExistenceOfBookOrMembers.checkBookAvailability , BooksController.deleteBook);

export const BooksRouter = router;
