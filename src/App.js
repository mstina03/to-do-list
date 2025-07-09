import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TaskForm from './components/Tasks/TaskForm';
import ContactForm from './components/Contacts/ContactForm';
import TaskContainer from './components/Tasks/TaskContainer';
import ContactContainer from './components/Contacts/ContactContainer';
import './components/Tasks/TaskContainer.css';
import './components/Contacts/ContactContainer.css';

function App() {
  const [tasks, setTasks] = useState([
    
    {
      front: 'Pay electric bill',
      back: 'Due the 5th of the month'
    },
    {
      front: 'Pay water bill',
      back: 'Due the 15th of the month'
    },
    {
      front: 'Pay cable bill',
      back: 'Due the 20th of the month'
    },
    {
      front: 'Pay student loan',
      back: 'Due the 25th of the month'
    },
  ]);

  const [contacts, setContacts] = useState([
    {
      name: 'Jane Doe',
      phone: '205-555-1234',
      email: 'jane@example.com',
      address: '123 Main St Montgomery, AL',
      notes: 'Met at conference'
    },
    {
      name: 'John Smith',
      phone: '205-555-5678',
      email: 'john@example.com',
      address: '456 Oak Ave Birmingham, AL',
      notes: 'Friend from college'
    },
    {
      name: 'Mary Smith',
      phone: '334-327-5677',
      email: 'mary@example.com',
      address: '611 Oak Lane Selma, AL',
      notes: 'Friend from high school'
    }
  ]);


  const addTask = (front, back) => {
    const newTasks = [...tasks, { front, back }];
    setTasks(newTasks);
  };

  const deleteTask = (front) => {
    const newTasks = tasks.filter(task => task.front !== front);
    setTasks(newTasks);
  };

  const addContact = (name, phone, email, address, notes) => {
    const newContact = { name, address, phone, email, notes };
    setContacts([...contacts, newContact]);
  };



  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((_, index) => index !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header" />

      <main>
        <section id="addnew">
          <TaskForm addTask={addTask} />
        </section>

        <section id="tasks">
          <h1>Task List</h1>
          <TaskContainer tasks={tasks} deleteTask={deleteTask} />
        </section>

        <section id="addcontact">
          <ContactForm addContact={addContact} />
        </section>

        <section id="contacts">
          <h1>Contact List</h1>
          <ContactContainer contacts={contacts} deleteContact={deleteContact} />
        </section>
      </main>
    </div>
  );
}

export default App;
