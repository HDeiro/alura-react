import Timer from '../components/timer';
import Form from '../components/form';
import TaskList from '../components/task-list';
import style from './App.module.scss';
import { useState } from 'react';
import { Task } from '../types/task';

const mocks: Task[] = [
  {
    id: 'batata',
    name: 'Teste',
    time: '00:00:03',
    selected: false,
    completed: false
  },
  {
    id: 'batata2',
    name: 'Teste 2',
    time: '00:00:30',
    selected: false,
    completed: false
  }
];

function App() {
  const [tasks, setTasks] = useState<Task[] | []>(mocks);
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

      <Timer task={selectedTask}/>
    </div>
  );
}

export default App;
