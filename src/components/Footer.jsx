/** @format */

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className='Todo'>
      <span className='completeTodo'>Completed Todos: {completedTodos}</span>
      <span className='totalTodo'>Total Todos: {totalTodos}</span>
    </div>
  );
}
