const ControlPanel = (props) => {

    const addTask = () => {
        props.addTask()
    }

    const onChageInputText = (event) => {
        let symbol = event.target.value
        props.updateInputText(symbol)
    }

    const onTestChange = () => {
        var key = window.event.keyCode;
        if (key === 13) {
            addTask();
        }
    }

    return(
        <div className="controlPannel">
            <textarea className="controlPanel-textaria" onKeyPress={onTestChange} value={props.data.inputText} onChange={onChageInputText} cols="30" rows="1"/>
            <button className="controlPanel-button" onClick={addTask}>add</button>
        </div>
    )
}

export default ControlPanel