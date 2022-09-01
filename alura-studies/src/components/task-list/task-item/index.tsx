import { Task } from "../../../types/task";
import style from './task-item.module.scss';

interface TaskItemProps {
    task: Task;
}

function TaskItem({ task }: TaskItemProps) {
    return (
        <li className={style['task-item']}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
        </li>
    )
}

export default TaskItem;