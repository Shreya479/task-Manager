import React from "react";

interface TaskItemProps {
    task: { id: number; title: string; completed: boolean };
    onToogle: () => void;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToogle, onDelete }) => {
    return (
        <div>
            <input type = "checkbox" checked={task.completed} onChange={onToogle} />
            <span>{task.title}</span>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};
export default TaskItem;