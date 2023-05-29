"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const connectDB = async () => {
    try {
        const options = {
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            logging: ['query', 'error'],
            type: 'postgres',
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/**/*.{ts,js}'],
            subscribers: ['src/subscriber/**/*.ts'],
            database: process.env.POSTGRES_DB,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            synchronize: true
        };
        await (0, typeorm_1.createConnection)(options);
        console.log('MongoDB Connected...');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=database.js.map