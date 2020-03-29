import {Injectable, NotFoundException} from "@nestjs/common";
import {BookRepository} from "./repository/book.repository"
import {InjectRepository} from "@nestjs/typeorm";
import {ObjectID} from "typeorm";
import {Book} from "./entity/book.entity";
import {AuthorRepository} from "./repository/author.repository";

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(BookRepository)
        private bookRepository: BookRepository,
        @InjectRepository(AuthorRepository)
        private authorRepository: AuthorRepository
    ) {}

    async getBookById(id: ObjectID): Promise<Book> {
        const book = await this.bookRepository.findOne(id);

        if (!book) {
            throw new NotFoundException("Current book not found");
        }

        return book;
    }

    async getAllBooks(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async createBook(book: Book): Promise<Book> {
        await this.bookRepository.save(book);
        return book;
    }

    async updateBook(id: ObjectID, book: Partial<Book>): Promise<Book> {
        await this.bookRepository.update(id, book);

        return await this.bookRepository.findOne(id);
    }

    async deleteBook(id: ObjectID): Promise<void> {
        await this.bookRepository.delete(id);
    }
}