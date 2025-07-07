import './TaskForm.css';

const TaskForm = ({ addTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const taskField = document.querySelector('[name=task]');
        const notesField = document.querySelector('[name=notes]');

        const taskValue = taskField.value;
        const notesValue = taskField.value;

        taskField.value = '';
        notesField.value = '';

        addTask(taskValue, notesValue);

    }
    return (
        <section className='task-form'>
            <h2> New Task</h2>
            <form action="#" method="GET" onSubmit={handleSubmit}>

                <div className='form-row'>
                    <label>
                        Task:
                        <input type="text" name="task" placeholder="Add a task" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Notes:
                        <input type="text" name="notes" placeholder="Add any notes" />
                    </label>

                </div>
                <div className='form-row'>
                    <button type='submit'>Add Task</button>

                </div>
            </form>

        </section>
    )
}
export default TaskForm;