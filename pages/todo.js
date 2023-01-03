import React, { useEffect, useState } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  useEffect(() => {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      setTasks(JSON.parse(tasksFromStorage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = event => {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  };
  const handleDelete = index => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  return (
    <div className="container mx-auto max-w-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded w-full py-2 px-3 mb-3"
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={handleChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Añadir
        </button>
      </form>
      {tasks.length > 0 && (
        <ul className="mt-6">
          {tasks.map((task, index) => (
            <li key={index} className="py-3 border-b border-gray-400 flex items-center">
              {task}
              <button  onClick={() => handleDelete(index)} className="ml-auto text-red-500 hover:text-red-800">
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}