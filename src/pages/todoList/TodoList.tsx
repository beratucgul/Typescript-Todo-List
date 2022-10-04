import React, { useState } from "react";
import InputField from "../../components/inputField/InputField";
import TodoListView from "../../components/todoListView/TodoListView";
import { Todo } from "../../../models/todo/model";
import "../../App.css";

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoListView todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;