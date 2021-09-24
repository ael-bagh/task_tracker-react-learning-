const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button 
                className='btn btn-green'
                onClick={onClick}
            >
                Add Task
            </button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
