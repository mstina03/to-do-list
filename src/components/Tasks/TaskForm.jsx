import { useRef } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
    const taskRef = useRef();
    const notesRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();

        const task = taskRef.current.value;
        const notes = notesRef.current.value;

        addTask(task, notes);

        taskRef.current.value = '';
        notesRef.current.value = '';

    }
    return (
        <section className='task-form'>
            <h2> New Task</h2>
            <form action="#" method="GET" onSubmit={handleSubmit}>

                <div className='form-row'>
                    <label>
                        Task:
                        <input type="text" name="task" placeholder="Add a task" ref={ taskRef} />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Note:
                        <input type="text" name="notes" placeholder="Add any notes" ref={ notesRef} />
                    </label>

                </div>
                <div className='form-row'>
                    <button type='submit'>Add</button>

                </div>
            </form>

        </section>
    )
}
export default TaskForm;