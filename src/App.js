import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);

  const addTasks = event => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ name: taskInput });
    setTasks(newTasks);
  };

  const delTasks = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <div className="App">
        <h1>To-Do List</h1>
        <form className="questionnaire" autoComplete="off" onSubmit={addTasks}>
          <section className="affichage">
            <ul>
              {tasks.map((tasksItem, index) => {
                return (
                  <div className="listButton">
                    <button
                      type="button"
                      onClick={() => {
                        delTasks(index);
                      }}
                    >
                      <span role="img" aria-label="Cross">
                        ❌
                      </span>
                    </button>
                    <li
                      className={
                        selectedTask === "selected" ? "taskToStrikeOut" : null
                      }
                      key={index}
                      onClick={() => {
                        const newTasks = [...tasks];
                        setSelectedTask("selected");
                      }}
                    >
                      {tasksItem.name}
                    </li>
                  </div>
                );
              })}
            </ul>
          </section>
          <input
            id="titre"
            className="titre"
            placeholder="titre"
            style={{ paddingLeft: "10px", fontSize: "1rem" }}
            type="text"
            value={taskInput}
            onChange={event => {
              setTaskInput(event.target.value);
            }}
          ></input>
          <input className="button" type="submit" value="Ajouter une Tache" />
        </form>
      </div>
    </>
  );
}

export default App;
