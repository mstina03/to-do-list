import './App.css';
import { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskContainer from './components/TaskContainer/TaskContainer';
import './components/TaskContainer/TaskContainer.css'


function App() {

  const [tasks, setTasks] = useState([
    { front: 'Take package to post office', back: '' },
    { front: 'Pay electric bill', back: 'Due the 5th of the month' },
    { front: 'Pay water bill', back: 'Due the 15th of the month' },
    { front: 'Pay cable bill', back: 'Due the 20th of the month' },
    { front: 'Pay student loan', back: 'Due the 25th of the month' },
    

  ]);

  const addTask = (front, back) => {
    const newTaks = [...tasks, { front, back }];

    setTasks(newTaks);
  }

  const deleteTask = (front) => {
    const newTasks = tasks.filter(task => task.front !== front);
    setTasks(newTasks);

  }


    return (
      <div className="App">
        <header className="App-header">
          <h1>Task List</h1>
        </header>
        <main >

          <TaskForm addTask={addTask} />
          <TaskContainer tasks={tasks} deleteTask={deleteTask} />

        </main>
      </div>
    );
  }


export default App;
