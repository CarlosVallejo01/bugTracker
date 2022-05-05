import { useState, useEffect } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      console.log("PEPEPEPEPEP");
      console.log(tasksFromServer);
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    console.log("hola: aiios");
    const res = await fetch('http://127.0.0.1:8000/dbhandler/reports')
    console.log("hola: amiiasisi");
    const data = await res.json()
    
    
    return data;
  }

//Add task
const addTask = async (task) => {
  console.log(task);
  const res = await fetch("http://127.0.0.1:8000/dbhandler/add_report", {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Headers': '*'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])

  /*
  console.log(task);
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask])
  */
}

//delete task
const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/dbhandler/reports${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Remainder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task)=>
      task.id === id ? {...task, reminder: !task.reminder} : task
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)}
      showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0
      ?
      <Tasks tasks={tasks}
      onDelete={deleteTask}
      onToggle={toggleReminder}
      />
      :
      'There are no reports'}
     
    </div>
  );
}

export default App;
