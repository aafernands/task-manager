import React from "react";
import Task from "../Task/Tasks.js";

function TaskList({ tasks, handleDelete, handleComplete, handlePriorityChange }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handlePriorityChange={handlePriorityChange}
        />
      ))}
    </div>
  );
}

export default TaskList;
