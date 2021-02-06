import {connect} from "react-redux";
import TaskList from "./TaskList";
import {changeStatusTaskActionCreator, removeTaskActionCreator} from "../../../../redux/appReducer";

const mapDispatchToProps = {
        changeStatus: changeStatusTaskActionCreator,
        removeTask: removeTaskActionCreator
}

const mapStateToProps = (store) => ({
        data: store.appPage.tasks
    })

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList)

export default TaskListContainer
