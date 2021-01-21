import {connect} from "react-redux";
import ControlPanel from "./ControlPanel";
import {updateNewTextActionCreator, addTask} from "../../../../redux/appReducer";

const mapDispatchToProps = {
        updateInputText: updateNewTextActionCreator,
        addTask: addTask
}

const mapStateToProps = (state) => {
    return {
        data: state.appPage
    }
}

const ControlPannelContainer = connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
export default ControlPannelContainer