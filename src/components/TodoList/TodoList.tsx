import { useState } from "react";
import { NewTodo } from "../NewTodo";
import { Todo } from "../../todo.model.ts";
import "./TodoList.scss";

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random().toString(), text: text }];
    });
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="card todo-list-item">
            <span>{todo.text}</span>
            <button onClick={() => todoDeleteHandler(todo.id)}>✅</button>
          </li>
        ))}
      </ul>
    </>
  );
};
