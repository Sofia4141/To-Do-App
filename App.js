import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './Redux/actions';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskInput addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
