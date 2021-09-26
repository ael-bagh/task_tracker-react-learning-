const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button 
                className={showAdd ? 'btn btn-red' : 'btn btn-green'}
                onClick={onAdd}
            >
                {showAdd ? 'close' : 'Add task'}
            </button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
