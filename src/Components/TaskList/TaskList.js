import React from 'react';
import Task from '../Task/Tasks.js';

function TaskList({ tasks, handleDelete, handleComplete }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
