import {Injectable, NotFoundException} from '@nestjs/common';
import {AuthorRepository} from "./repository/author.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "./entity/author.entity";
import {ObjectID} from "typeorm";

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(AuthorRepository)
        private authorRepository: AuthorRepository
    ) {}

    async getAuthorById(id: ObjectID): Promise<Author> {
        const author = await this.authorRepository.findOne(id);

        if (!author) {
            throw new NotFoundException("Current author not found");
        }

        return author;
    }

    async getAllAuthors(): Promise<Author[]> {
        return await this.authorRepository.find();
    }

    async createAuthor(authorDto: Author): Promise<Author> {
        const author = await this.authorRepository.create(authorDto);
        await this.authorRepository.save(author);

        return author;
    }

    async updateAuthor(id: ObjectID, authorDto: Partial<Author>): Promise<Author> {
        await this.authorRepository.update(id, authorDto);

        return await this.authorRepository.findOne(id);
    }

    async deleteAuthor(id: ObjectID): Promise<void> {
        await this.authorRepository.delete(id);
    }
}
