import { Task } from "../../types/task";
import TaskItem from "../task-item";
import './style.scss';

const tasks: Task[] = [
    {
        name: 'React',
        time: '02:00:00'
    },
    {
        name: 'JavaScript',
        time: '01:20:00'
    },
    {
        name: 'RxJs',
        time: '00:20:00'
    }
];

function TaskList() {
    return (
        <aside className="task-list">
            <h2>Daily Studies</h2>
            <ul>{
                tasks.map((task, index) => 
                    <TaskItem 
                        task={task} 
                        key={index} 
                    />
                )
            }</ul>
        </aside>
    )
}

export default TaskList;