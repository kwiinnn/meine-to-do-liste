import { useState } from "react";
import type { Todo } from "../types";

export function TodoList() {
  const todo: Todo[] = [
    {
      id: 1,
      title: "Making todo",
      completed: false,
    },
  ];

  return (
    <>
      <h1>Todo List</h1>
      <input/>
      <button>Add</button>
      <div>
        
        <ul>
          {todo.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

