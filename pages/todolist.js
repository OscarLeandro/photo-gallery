import React, { useState, useEffect } from 'react';

export default function TodoList(){
  // Crea el estado para guardar las tareas
  const [tasks, setTasks] = useState([]);

  // Carga las tareas del Local Storage en el estado al inicio
  useEffect(() => {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
      setTasks(JSON.parse(tasksFromStorage));
    }
  }, []);

  // Guarda las tareas en el Local Storage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Función para agregar una tarea
  const addTask = (event) => {
    event.preventDefault();
    const task = event.target.elements.task.value;
    if (task) {
      setTasks([...tasks, task]);
      event.target.elements.task.value = '';
    }
  };

  // Función para eliminar una tarea
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input type="text" name="task" />
        <button type="submit">Añadir tarea</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};