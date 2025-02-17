import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-secondary me-2">
        Add
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleClear}
      >
        Clear
      </button>
    </form>
  );
};

export default TodoForm;
