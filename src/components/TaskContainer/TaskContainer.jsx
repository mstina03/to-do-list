import TaskCard from '../TaskCard/TaskCard';

function TaskContainer({ tasks, deleteTask }) {
   

        const taskList = tasks.map(task =>
            <TaskCard
                front={task.front}
                back={task.back}
                key={task.front}
                deleteTask={deleteTask} />
        );

        return (
            <section className='tasks-container'>
                {taskList}
            </section>
        )
    }
    

export default TaskContainer;
