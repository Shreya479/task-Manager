import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const AddTask: React.FC = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (title.trim()) {
            dispatch(addTask({id: Date.now(), title, completed: false }));
            setTitle('');
        }
    };

    return(
        <div>
            <input type = "text" value = {title} onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task" />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );;
};
export default AddTask