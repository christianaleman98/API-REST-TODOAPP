import { Router } from "express";
import {createTodo,getTodos,updateTodo,deleteTodo} from '../controllers/todo.controllers';

const router = Router();

router.post('/todos',createTodo);
router.get('/todos',getTodos);
router.put('/todo/:id',updateTodo);
router.delete('/todo/:id',deleteTodo);

export default router;