import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ObjectID,
    ObjectIdColumn,
    OneToMany,
    UpdateDateColumn
} from "typeorm";
import {Book} from "./book.entity";
import {IsDate, IsNotEmpty, MaxDate} from "class-validator";
import {Type} from "class-transformer";

@Entity()
export class Author extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    @IsNotEmpty()
    firstName: string;

    @Column()
    @IsNotEmpty()
    lastName: string;

    @Column("date")
    @Type(() => Date)
    @IsNotEmpty()
    @IsDate()
    @MaxDate(new Date())
    birthday: Date;

    @OneToMany(type => Book, book => book.author)
    books: Book[];

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}