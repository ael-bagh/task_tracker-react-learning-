import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
    ])
    // show Add task
    // const showAddTask = () => {

    // }
    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000 +1);
      const newTask = {id , ...task};
      setTasks([ ...tasks, newTask]);
    }
    //Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    }
    //setReminder
    const onRemind = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    }

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onRemind={onRemind}/>
    </div>
  );
}

export default App;
