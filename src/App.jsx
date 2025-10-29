import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  return (
    <div>
      <h1>To Do List</h1>
      <p>Number of tasks with length method {tasks.length}</p>
      Current input text: {newTaskText}
    </div>
  );
}

export default App;
