import { useState } from "react";

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
      inComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
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
    </div>
  );
}

export default App;
