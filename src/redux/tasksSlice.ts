import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Task {
    id: number;
    title: string;
    completed: boolean;
}
interface TasksState {
    task: Task[];
    filter: 'all' | 'completed' | 'pending';
}
const initialState: TasksState = {
    task: [],
    filter: 'all',
};
const taskSlice = createSlice ({
    name : 'tasks',
    initialState, 
    reducers:{
        setTasks : (state, action: PayloadAction<Task[]>) => {
            state.task = action.payload;
        },
        addTask : (state, action: PayloadAction<Task>) => {
            state.task.push(action.payload);
        },
        toogleTask: (state, action: PayloadAction<number>) => {
            const task = state.task.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action: PayloadAction<number>) =>{
            state.task = state.task.filter(task => task.id != action.payload);
        },
        setFilter: (state, action: PayloadAction<'all' | 'completed' | 'pending'>) =>{
            state.filter = action.payload;
        },
    },
});
export const {setTasks, addTask, toogleTask, deleteTask, setFilter} = taskSlice.actions;
export default taskSlice.reducer;
