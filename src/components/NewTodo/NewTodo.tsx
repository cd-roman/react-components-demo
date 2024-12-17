import { useRef } from "react";
import "./NewTodo.scss";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

export const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form className="card new-todo-form" onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <h2>Add New Todo</h2>
        <label htmlFor="todo-text">Todo item text</label>
        <input type="text" id="todo-text" ref={textInputRef} required />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
