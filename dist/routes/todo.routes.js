"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = require("../controllers/todo.controllers");
const router = (0, express_1.Router)();
router.post('/todos', todo_controllers_1.createTodo);
router.get('/todos', todo_controllers_1.getTodos);
router.put('/todo/:id', todo_controllers_1.updateTodo);
router.delete('/todo/:id', todo_controllers_1.deleteTodo);
exports.default = router;
