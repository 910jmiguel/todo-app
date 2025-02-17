import { Todo } from "@/types"
import ToDoItem from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
};

const TodoList = ({todos, toggleTodo, deleteTodo}: TodoListProps) => {
  return (
    <div>
        {todos.length === 0 ? <p>No tasks yet!</p> : null}
        {todos.map((todo) => (
           <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> 
        ))}
    </div>
  );
}

export default TodoList