const TaskList = props => (
        <div className="controlPannel">
            {props.data.map(item =>
                <div className="controlPanel-item">
                    {item.taskName}
                    <input
                        type="checkbox"
                        className="controlPanel-item_input"
                        onClick={() => {props.changeStatus(item.id)}}
                        defaultChecked={item.status}/>
                    <button
                        className="controlPanel-item_button"
                        onClick={() => props.removeTask(item.id)}>
                        x
                    </button>
                </div>)}
        </div>
    )

export default TaskList