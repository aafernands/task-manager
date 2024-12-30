import React from 'react';

function Task({ task, handleDelete, handleComplete }) {
  return (
    <div className="task">
      
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={() => handleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;