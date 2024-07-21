/* @format */

import { useState } from "react";
import "../style.css";
export default function Form({ todos, setTodos }) {
  const [tasks, setTask] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, tasks]);

    setTask({ name: " ", done: false });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='inputContainer'>
        <input
          className='input'
          onChange={(e) => setTask({ name: e.target.value, done: false })}
          value={tasks.name}
          type='text'
          placeholder='Enter todo item'
        />
        <button className='button' type='submit'>
          Add
        </button>
      </div>
    </form>
  );
}
