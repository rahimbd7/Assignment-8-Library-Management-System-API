

import { Router } from 'express';
import { BooksController } from './book.controller';

const router = Router();

console.log("Books routes loaded");
router.post('/', BooksController.createBook);
router.get('/', BooksController.getAllBooks);
router.get('/:bookId', BooksController.getBookById);
router.put('/:bookId', BooksController.updateBook);
router.delete('/:bookId', BooksController.deleteBook);

export const BooksRouter = router;
