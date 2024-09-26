import React, { Children, createContext, useState } from "react";
// Create the context object
export const TaskContext = createContext();

// Context provider component wraps all child components that need access to the state
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks], { task, completed: false });
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return <TaskContext.Provider value={{ tasks, addTask, deleteTask }} />;
};
