"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Todo_1 = require("./entities/Todo");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'chris92@',
    port: 5432,
    database: 'todo-database',
    entities: [Todo_1.todoList],
    logging: true,
    synchronize: true
});
