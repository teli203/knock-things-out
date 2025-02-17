import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Notes from './components/Notes.tsx';
import Timer from './components/Timer.tsx';
import Background from './components/Background.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import boxingBefore from '/src/assets/icons8-boxing-48.png';
import boxingAfter from '/src/assets/icons8-boxing-64.png';

const App: React.FC = () => {
  const [todos, setTodos] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-4">
      <Background page="home" />

      <div className="d-flex align-items-center justify-content-center">
        <img
          src={boxingBefore}
          alt="Before Title"
          className="img-before me-2"
        />
        <h1 className="text-center m-0">Knock Things Out</h1>
        <img src={boxingAfter} alt="After Title" className="img-after ms-2" />
      </div>

      <p className="text-center" id="date">
        {dateTime.toLocaleString()}
      </p>
      <Timer />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {/* Wrap Notes inside ErrorBoundary */}
      <ErrorBoundary>
        <Notes />
      </ErrorBoundary>
    </div>
  );
};

export default App;
