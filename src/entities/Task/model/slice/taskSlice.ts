import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Task, TasksSchema} from "/src/entities/Task/model/types/task";


const tasks = JSON.parse(<string>localStorage.getItem('tasks')) as TasksSchema

const initialState: TasksSchema = tasks || [] as TasksSchema;

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state: TasksSchema, action: PayloadAction<Task>) => {
            state.push(action.payload)
            const tasks = JSON.parse(localStorage.getItem('tasks') as string) || [];
            localStorage.setItem('tasks', JSON.stringify([...tasks, action.payload]));
        },

        deleteTask: (state: TasksSchema, action: PayloadAction<Task>) => {
            const filteredTasks = state.filter(task => task.id !== action.payload.id);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks))
            return filteredTasks;
        },
        toggleTask: (state: TasksSchema, action: PayloadAction<Task>) => {
            const filteredTasks = state.map((task) => {
                if (task.id === action.payload.id) {
                    return { ...task, isCompleted: !task.isCompleted  };
                }
                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(filteredTasks))
            return filteredTasks;
        }
    },
})

export const {actions: taskActions} = taskSlice
export default taskSlice.reducer
