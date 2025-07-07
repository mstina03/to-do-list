import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import ContactForm from './components/ContactForm/ContactForm';
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
    const newTasks = [...tasks, { front, back }];

    setTasks(newTasks);
  }

  const deleteTask = (front) => {
    const newTasks = tasks.filter(task => task.front !== front);
    setTasks(newTasks);

  }

  const addContact = (front, back) => {
    const newContacts = [...tasks, { front, back }];

     //setContactss(newContacts);
  }


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        
      </header>
      <main >

        <section id="addnew">
          <TaskForm addTask={addTask} />
        </section>

        <h1>Task List</h1>
        <section id="tasks">
          <TaskContainer tasks={tasks} deleteTask={deleteTask} />
        </section>

        <section id='addcontact'>
          <h1>Add Contact</h1>
          <ContactForm addContact={addContact} />

        </section>

        <section id='contacts'>
          <h1>Contact List</h1>
          
        </section>

      </main>
    </div>
  );
}


export default App;
