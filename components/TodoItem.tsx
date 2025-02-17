import { Todo } from "@/types"

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const ToDoItem = ({todo, toggleTodo, deleteTodo}: TodoItemProps) => {
  return (
    <div>
      <input 
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}      
      />
      <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
        X
      </button>
    </div>
  )
}

export default ToDoItem