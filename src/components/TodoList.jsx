/** @format */

import TodoItem from "./TodoItem";
import "../style.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.done - b.done));
  return (
    <div className='Todolist'>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
