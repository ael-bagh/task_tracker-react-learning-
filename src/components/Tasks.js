import Task from './Task'

const Tasks = ({ tasks, onDelete, onRemind }) => {
    return (
        <div className='tasks'>
            {
                tasks.map((task) => 
                (
                    <Task className='task' key={task.id} task={task} onDelete={onDelete} onRemind={onRemind}></Task>
                )
            )}
        </div>
    )
}

export default Tasks
