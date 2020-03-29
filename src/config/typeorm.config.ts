import { TypeOrmModuleOptions }  from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mongodb",
    host: "mongodb",
    port: 27017,
    username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    entities: [__dirname + '/../books/entity/*.entity.js'],
    synchronize: true
};