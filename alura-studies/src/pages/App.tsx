import Form from '../components/form';
import TaskList from '../components/task-list';
import { Task } from '../types/task';
import style from './App.module.scss';

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

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      
      <TaskList 
        tasks={tasks} 
        label="Daily Studies"
      />
    </div>
  );
}

export default App;
