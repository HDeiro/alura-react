import { Task } from "../../../types/task";
import style from './task-item.module.scss';

interface TaskItemProps {
    task: Task;
    selectTask: (task: Task) => void;
}

function TaskItem({ task, selectTask }: TaskItemProps) {
    const isSelected = task.selected ? style['task-item-selected'] : '';
    const isCompleted = task.completed ? style['task-item-completed'] : '';

    return (
        <li 
            onClick={() => selectTask(task)}
            className={`${style['task-item']} ${isSelected} ${isCompleted}`}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
        </li>
    )
}

export default TaskItem;