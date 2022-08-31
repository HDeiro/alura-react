import { Task } from "../../../types/task";
import style from './task-item.module.scss';

interface TaskItemProps {
    task: Task;
}

function TaskItem({task: { name, time }}: TaskItemProps) {
    return (
        <li className={style['task-item']}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default TaskItem;