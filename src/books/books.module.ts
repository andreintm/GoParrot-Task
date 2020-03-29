import { Module } from '@nestjs/common';
import { AuthorsController } from "./authors.controller";
import { AuthorsService } from './authors.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AuthorRepository} from "./repository/author.repository";
import {BookRepository} from "./repository/book.repository";
import {BooksController} from "./books.controller";
import {BooksService} from "./books.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([AuthorRepository, BookRepository])
    ],
    controllers: [AuthorsController, BooksController],
    providers: [AuthorsService, BooksService],
})
export class BooksModule {}
