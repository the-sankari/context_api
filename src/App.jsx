import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./component/TodoForm";
import TodoItem from "./component/TodoItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, { task, complete: false }]);
    console.log(`${task} added`);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    console.log(...tasks, "Task deleted ");
  };
  return (
    <>
      <h1>Todo Task</h1>
      <TodoForm addTask={addTask} />
      <TodoItem tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default App;
