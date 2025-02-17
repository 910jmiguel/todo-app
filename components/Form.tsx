import { useState } from "react";

type FormProps = {
  addTodo: (text: string) => void;
};

const Form = ({ addTodo }: FormProps) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stops from refreshing
    if (!text.trim()) {
      // prevents from adding empty tasks
      return;
    }
    addTodo(text);
    setText(""); // clears input field after adding
  };

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task"
        className="border p-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">
        Add
      </button>
    </form>
  );
};

export default Form;
