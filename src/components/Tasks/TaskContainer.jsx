import TaskCard from './TaskCard';



const TaskContainer = ({ tasks, deleteTask, completeTask }) => {

    return (
        <div className="tasks-container">
            {tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    id={index}
                    front={task.front}
                    back={task.back}
                    completed={task.completed}
                    deleteTask={() => deleteTask(index)}
                    completeTask={completeTask}
                    
                />
              
            ))}
        </div>
    );
};

export default TaskContainer;
