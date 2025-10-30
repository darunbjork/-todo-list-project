import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText === "") {
      return;
    }

    const newId = Date.now();
    const newTask = {
      id: newId,
      text: newTaskText,
      isComplete: false, // Fixed typo: changed inComplete to isComplete
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleToggleComplete = (idToggle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === idToggle) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (idToDelete) => {
    const filteredTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <p>Number of tasks with length method {tasks.length}</p>
      <p> Current input text: {newTaskText}</p>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={newTaskText}
        onChange={(event) => setNewTaskText(event.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            border: "1px solid #eee",
            padding: "10px",
            margin: "5px 0",
            borderRadius: "4px",
            cursor: "pointer",
            textDecoration: task.isComplete ? "line-through" : "none",
            opacity: task.isComplete ? 0.5 : 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span onClick={() => handleToggleComplete(task.id)}>{task.text}</span>
          <button
            onClick={() => handleDeleteTask(task.id)}
            style={{
              background: "#ff4444",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
