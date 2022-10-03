import {DataSource} from 'typeorm'
import {todoList} from './entities/Todo'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'chris92@',
    port: 5432,
    database: 'todo-database',
    entities: [todoList],
    logging:true,
    synchronize:true
})