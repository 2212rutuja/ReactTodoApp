import express from 'express';
import { addTodo } from '../controller/todoController.js';
import { getAllTodos } from '../controller/todoController.js';
import { toggleTodoDone } from '../controller/todoController.js';
import { updateTodo } from '../controller/todoController.js';
import { deleteTodo } from '../controller/todoController.js';

const route = express.Router()

route.post('/todos',addTodo)
route.get('/todos',getAllTodos)
route.get( '/todos/:id',toggleTodoDone)
route.put( '/todos/:id',updateTodo)
route.delete( '/todos/:id',deleteTodo)



export default route