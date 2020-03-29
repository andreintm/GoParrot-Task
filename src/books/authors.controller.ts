import {Body, Controller, Delete, Get, Param, Put, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { AuthorsService } from "./authors.service";
import {Author} from "./entity/author.entity";
import {ObjectID} from "typeorm";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
    constructor(private authorsService: AuthorsService) {}

    @Get(":id")
    getAuthorById(@Param("id") id: ObjectID): Promise<Author> {
        return this.authorsService.getAuthorById(id);
    }

    @Get()
    getAllAuthors(): Promise<Author[]> {
        return this.authorsService.getAllAuthors();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createAuthor(@Body() author: Author): Promise<Author> {
        return this.authorsService.createAuthor(author);
    }

    @Put(":id")
    @UsePipes(ValidationPipe)
    updateAuthor(@Param("id") id: ObjectID, @Body() author: Author): Promise<Author> {
        return this.authorsService.updateAuthor(id, author);
    }

    @Delete(":id")
    deleteAuthor(@Param("id") id:ObjectID) {
        return this.authorsService.deleteAuthor(id);
    }
}
