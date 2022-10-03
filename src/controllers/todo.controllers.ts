import {Request,Response} from 'express';
import {todoList} from '../entities/Todo';

export const createTodo = async (req:Request,res:Response) =>{
    try {
    const {tarea,fechaInicio,fechaFin,prioridad,responsable} = req.body;

    const todolist = new todoList();
    todolist.tarea = tarea;
    todolist.fechaInicio = fechaInicio;
    todolist.fechaFin = fechaFin;
    todolist.prioridad = prioridad;
    todolist.responsable = responsable;

    await todolist.save();

    return res.json(todolist);
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
};

export const getTodos = async (req: Request,res:Response) =>{
try {
    const todos = await todoList.find();
    return res.json(todos);
} catch (error) {
    if(error instanceof Error){
        return res.status(500).json({message: error.message});   
    }
}
};

export const updateTodo = async (req:Request,res:Response) =>{
    try {
        const {id} = req.params;

        const todo = await todoList.findOneBy({id: parseInt(req.params.id)});

        if(!todo) return res.status(404).json({message:'El TODO no existe.'});
        
        await todoList.update({id: parseInt(id)},{
            tarea:req.body.tarea,
            fechaFin:req.body.fechaFin,
            status:req.body.status,
            prioridad:req.body.prioridad,
            responsable:req.body.responsable
        });

        return res.sendStatus(204);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({message: error.message});   
        }
    }
};

export const deleteTodo = async (req:Request,res:Response) =>{
    try {
        const {id} = req.params;

        const result = await todoList.delete({id:parseInt(id)});

        if(result.affected===0){
            return res.status(404).json({message: 'TODO no encontrado.'});
        }
    return res.sendStatus(204);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
};