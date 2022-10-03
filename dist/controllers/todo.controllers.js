"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const Todo_1 = require("../entities/Todo");
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tarea, fechaInicio, fechaFin, prioridad, responsable } = req.body;
        const todolist = new Todo_1.todoList();
        todolist.tarea = tarea;
        todolist.fechaInicio = fechaInicio;
        todolist.fechaFin = fechaFin;
        todolist.prioridad = prioridad;
        todolist.responsable = responsable;
        yield todolist.save();
        return res.json(todolist);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createTodo = createTodo;
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield Todo_1.todoList.find();
        return res.json(todos);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getTodos = getTodos;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todo = yield Todo_1.todoList.findOneBy({ id: parseInt(req.params.id) });
        if (!todo)
            return res.status(404).json({ message: 'El TODO no existe.' });
        yield Todo_1.todoList.update({ id: parseInt(id) }, {
            tarea: req.body.tarea,
            fechaFin: req.body.fechaFin,
            status: req.body.status,
            prioridad: req.body.prioridad,
            responsable: req.body.responsable
        });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield Todo_1.todoList.delete({ id: parseInt(id) });
        if (result.affected === 0) {
            return res.status(404).json({ message: 'TODO no encontrado.' });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteTodo = deleteTodo;
