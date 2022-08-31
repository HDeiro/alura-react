import Form from '../components/form';
import TaskList from '../components/task-list';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
