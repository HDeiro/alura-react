import { Task } from "../../types/task";
import TaskItem from "./task-item";
import style from './task-list.module.scss';

interface TaskListProps {
    tasks: Task[];
    label?: string;
}

function TaskList({ tasks, label }: TaskListProps) {
    return (
        <aside className={style['task-list']}>
            <h2>{label || 'Task List'}</h2>
            <ul>{
                tasks.map((task, index) => 
                    <TaskItem 
                        task={task} 
                        key={task.name + index} 
                    />
                )
            }</ul>
        </aside>
    )
}

export default TaskList;