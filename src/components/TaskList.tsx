import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import TaskItem from './TaskItem';
import { deleteTask, toogleTask } from "../redux/tasksSlice";

const TaskList React.FC = () =>{
    const task = useSelector((state: RootState) => state.tasks.tasks);
    const filter = useSelector((state: RootState) => state.tasks.filter);
    const Disptach = useDispatch();

    const filteredTasks = task.filter(task =>{
        if (filter === 'completed')
        return task.completed;
        if (filter === 'pending')
        return task.completed;
    return true;
    });
    return (
        <div>
            {filteredTasks.map(task =>(
                <TaskItem
                key = {task.id}
                task = {task}
                onToogle={() =>
                    Disptach(toogleTask(task.id))}
                onDelete={() =>
                Disptach(deleteTask(task.id))}
                />
            ) )}
        </div>
    );
};
export default TaskList;