import React, { useState } from "react";
import TaskForm from "./Components/TaskForm/TaskForm.js";
import TaskList from "./Components/TaskList/TaskList.js";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { ...task, id: Date.now(), completed: false }
    ]);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handlePriorityChange = (id, newPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, priority: newPriority } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handlePriorityChange={handlePriorityChange}
      />
    </div>
  );
}

export default App;
