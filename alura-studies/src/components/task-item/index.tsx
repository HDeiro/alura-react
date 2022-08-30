import { Task } from "../../types/task";

function TaskItem(props: {task: Task}) {
    return (
        <li>
            <h3>{props.task.name}</h3>
            <span>{props.task.time}</span>
        </li>
    )
}

export default TaskItem;