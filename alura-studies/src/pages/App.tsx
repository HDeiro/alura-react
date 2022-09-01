import Timer from '../components/timer';
import Form from '../components/form';
import TaskList from '../components/task-list';
import style from './App.module.scss';
import { useState } from 'react';
import { Task } from '../types/task';


function App() {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<Task>();

  function selectTask(task: Task) {
    setTasks(currentTasks => {
      currentTasks.forEach(current => 
        current.selected = current.id === task.id
      );

      return currentTasks;
    });

    setSelectedTask(task);
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      
      <TaskList 
        selectTask={selectTask}
        tasks={tasks} 
        label="Daily Studies"
      />

      <Timer />
    </div>
  );
}

export default App;
