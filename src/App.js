import React, { useState } from 'react';
import './App.css'; // You can create your own CSS file for styling

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false }
  ]);

  // State to manage input for adding new tasks
  const [newTask, setNewTask] = useState('');

  // Function to handle adding new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to handle editing task title
  const handleEditTask = (id, newTitle) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  // Function to handle toggling task completion
  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  // Function to handle deleting a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      {/* Task list */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span contentEditable="true" onBlur={(e) => handleEditTask(task.id, e.target.innerText)}>
              {task.title}
            </span>
            <button className="edit-task-btn">Edit</button>
            <button className="delete-task-btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Add task form */}
      <div>
        <input
        id='add_input'
          type="text"
          placeholder="Enter task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
