import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
