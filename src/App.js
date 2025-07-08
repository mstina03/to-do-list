import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TaskForm from './components/TaskForm/TaskForm';
import ContactForm from './components/ContactForm/ContactForm';
import TaskContainer from './components/TaskContainer/TaskContainer';
import ContactContainer from './components/ContactContainer/ContactContainer';
import './components/TaskContainer/TaskContainer.css';
import './components/ContactContainer/ContactContainer.css';


function App() {

  const [tasks, setTasks] = useState([
    { front: 'Take package to post office', back: '' },
    { front: 'Pay electric bill', back: 'Due the 5th of the month' },
    { front: 'Pay water bill', back: 'Due the 15th of the month' },
    { front: 'Pay cable bill', back: 'Due the 20th of the month' },
    { front: 'Pay student loan', back: 'Due the 25th of the month' },


  ]);

  const [contacts, setContacts] = useState([
    { front: 'Jane Doe', back: '555-1234' },
    { front: 'John Smith', back: 'john@example.com' },


  ]);

  console.log(contacts);
  console.log("Contacts length:", contacts.length);
  console.log("Contacts array:", contacts);

  const addTask = (front, back) => {
    const newTasks = [...tasks, { front, back }];

    setTasks(newTasks);
  }

  const deleteTask = (front) => {
    const newTasks = tasks.filter(task => task.front !== front);
    setTasks(newTasks);

  }

  const addContact = (front, back) => {
    const newContacts = [...contacts, { front, back }];

    setContacts(newContacts);
  }



  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((_, index) => index !== id);
    setContacts(updatedContacts);
  };

 
  

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">

      </header>
      <main >

        <section id="addnew">
          <TaskForm addTask={addTask} />
        </section>


        <section id="tasks">
          <h1>Task List</h1>
          <TaskContainer tasks={tasks} deleteTask={deleteTask} />
        </section>

        <section id='addcontact'>

          <ContactForm addContact={addContact} />

        </section>

        <section id='contacts'>
          <h1>Contact List</h1>
          <ContactContainer contacts={contacts} deleteContact={deleteContact} />
        </section>


      </main>
    </div>
  );
}


export default App;
