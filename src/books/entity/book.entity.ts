import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinColumn, JoinTable,
    ManyToOne,
    ObjectID,
    ObjectIdColumn, RelationId,
    UpdateDateColumn
} from "typeorm";
import {Author} from "./author.entity";
import {IsDate, IsNotEmpty, MaxDate, ValidateNested} from "class-validator";
import {Type} from "class-transformer";
import {ReferenceObject} from "@nestjs/swagger/dist/interfaces/open-api-spec.interface";

@Entity()
export class Book extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @IsNotEmpty()
    title: string;

    @ManyToOne(type => Author, author => author.books)
    @JoinColumn()
    author: Author;

    @Column()
    @IsNotEmpty()
    iban: string;

    @Column("date")
    @Type(() => Date)
    @IsNotEmpty()
    @IsDate()
    @MaxDate(new Date())
    publishedAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}