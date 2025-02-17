"use client";
import Form from "@/components/Form";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    }
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <Form addTodo={addTodo} />
      <TodoList />
    </div>
  );
}
