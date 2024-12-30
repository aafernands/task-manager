import React from "react";

function Task({ task, handleDelete, handleComplete, handlePriorityChange }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>

      {/* Priority Dropdown */}
      <label htmlFor={`priority-${task.id}`}>Priority: </label>
      <select
        id={`priority-${task.id}`}
        value={task.priority}
        onChange={(e) => handlePriorityChange(task.id, e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      {/* Buttons */}
      <button onClick={() => handleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
