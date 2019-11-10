import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  //add new task to array tasks with a state status
  const addTasks = event => {
    event.preventDefault();
    const newTasks = [...tasks];
    newTasks.push({ name: taskInput, taskDone: false });
    newTasks.sort(sortTask);
    setTasks(newTasks);
    setTaskInput("");
  };

  // delete task from array tasks by index
  const delTasks = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // put strikes to taskInput by changing the status
  const strikeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].taskDone = !newTasks[index].taskDone;
    newTasks.sort(sortTask);
    setTasks(newTasks);
  };

  const sortTask = (a, b) => {
    if (a.taskDone === true && b.taskDone === false) {
      return 0;
    } else {
      return -1;
    }
  };

  return (
    <>
      <div className="App">
        <h1>To-Do List</h1>
        <form className="questionnaire" autoComplete="off" onSubmit={addTasks}>
          <section className="affichage">
            <ul>
              {tasks.map((tasksItem, index) => {
                // for each task push to the array creating a line with a button, the value of the task and a status
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
                        //putting line-through style on the task
                        tasksItem.taskDone === true ? "taskToStrikeOut" : ""
                      }
                      key={index}
                      onClick={() => {
                        strikeTask(index);
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
