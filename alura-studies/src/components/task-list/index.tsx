import { Task } from "../../types/task";
import TaskItem from "./task-item";
import style from './task-list.module.scss';

interface TaskListProps {
    tasks: Task[];
    label?: string;
    selectTask: (task: Task) => void;
}

function TaskList({ tasks, label, selectTask }: TaskListProps) {
    return (
        <aside className={style['task-list']}>
            <h2>{label || 'Task List'}</h2>
            <ul>{
                tasks.map(task => 
                    <TaskItem 
                        selectTask={selectTask}
                        task={task} 
                        key={task.id} 
                    />
                )
            }</ul>
        </aside>
    )
}

export default TaskList;