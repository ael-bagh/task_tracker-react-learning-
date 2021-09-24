import { FaTimes, FaBell, FaBellSlash} from 'react-icons/fa'

const Task = ({ task, onDelete, onRemind }) => {
    return (
        <div className='task'>
            <div>
                <h3 className='tasktext'>{task.text}</h3>
                <h4 className='taskday'>{task.day} </h4>
            </div>
            <div className='icons'>
                <h3><FaTimes className='xicon' onClick={() => onDelete(task.id)}/></h3>
                {task.reminder ? <FaBell className='bicon' onClick={() => onRemind(task.id)}/> : <FaBellSlash className='bicon' onClick={() => onRemind(task.id)}/>}
            </div>
        </div>
    )
}

export default Task
