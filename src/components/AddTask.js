import { useState } from 'react'

const addTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    return (
        <form>
            <div className='form-control'>
                <label className='label'>Add task</label>
                <input type='text' name='task' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} className='inp'/>
            </div>
            <div className='form-control'>
                <label className='label'>Date and time</label>
                <input type='text' className='inp' placeholder='Add Day' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='rem'>
                <label className='label'>Set reminder</label>
                <input type='checkbox' placeholder='Add Task' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className='rem'>
                <button type='submit' className='btn btn-green'> Save Task </button>
            </div>
        </form>
    )
}

export default addTask
