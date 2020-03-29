import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {BooksService} from "./books.service";
import {ObjectID} from "typeorm";
import {Book} from "./entity/book.entity";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('books')
@Controller("books")
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Get(":id")
    getAuthorById(@Param("id") id: ObjectID): Promise<Book> {
        return this.booksService.getBookById(id);
    }

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.booksService.getAllBooks();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBook(@Body() book: Book): Promise<Book> {
        return this.booksService.createBook(book);
    }

    @Put(":id")
    @UsePipes(ValidationPipe)
    updateBook(@Param("id") id: ObjectID, @Body() book: Book): Promise<Book> {
        return this.booksService.updateBook(id, book);
    }

    @Delete(":id")
    deleteBook(@Param("id") id:ObjectID) {
        return this.booksService.deleteBook(id);
    }
}