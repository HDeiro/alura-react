import { Task } from "../../types/task";
import style from './task-item.module.scss';

function TaskItem(props: {task: Task}) {
    return (
        <li className={style['task-item']}>
            <h3>{props.task.name}</h3>
            <span>{props.task.time}</span>
        </li>
    )
}

export default TaskItem;