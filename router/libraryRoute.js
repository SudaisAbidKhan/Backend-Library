import express from 'express'
import { addNewBook, deleteBook, getAllBooks, getSingleBook, getSingleBookAvail, updateBook } from '../controller/libraryController.js';

const libraryRoute = express.Router();

libraryRoute.post("/add-book", addNewBook);
libraryRoute.get("/get-all-books", getAllBooks);
libraryRoute.get("/get-single-book/:_id", getSingleBook);
libraryRoute.get("/get-single-book-avail", getSingleBookAvail);
libraryRoute.put("/update-book/:_id", updateBook);
libraryRoute.delete("/delete-book/:_id", deleteBook);

export default libraryRoute
