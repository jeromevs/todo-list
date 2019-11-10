import React, { useState } from "react";
const App = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  // Ouvrez le menu développeur de Chrome pour visualiser ce console.log
  console.log("current tasks", tasks);
  return (
    <div className="App">
      <form
        onSubmit={event => {
          // La fonction `onSubmit` ajoutera une nouvelle tâche dans l'état `tasks`
          event.preventDefault(); // `preventDefault` permet d'empecher le navigateur de recharger la page lorsqu'on valide le formulaire
          // La première chose à faire est de créer une copie de `tasks car React nous interdit de modifier `tasks` directement. Nous modifierons ensuite la copie.
          const newTasks = [...tasks]; // Ici, nous utilisons le `spread operator` (...) pour créer une copie d'un tableau. `newTasks` sera une copie de `tasks`.
          // Nous modifions `newTasks` en y ajoutant une tâche
          newTasks.push({ name: taskInput });
          // Nous disons à React que l'état `tasks` est maintenant égal à `newTasks`
          setTasks(newTasks);
        }}
      >
        <input
          type="text"
          value={taskInput}
          onChange={event => {
            setTaskInput(event.target.value);
          }}
        />
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
};
export default App;
