/* eslint-disable react/prop-types */
import React from "react";
import TodoList from "./TodoList";

const TodoItem = ({ tasks, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks availabel</p>
      ) : (
        tasks.map((task, index) => (
          <TodoList
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
          />
        ))
      )}
    </div>
  );
};

export default TodoItem;
