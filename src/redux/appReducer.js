const UPDATE_NEW_TEXT = "UPDATE_NEW_TEXT"
const ADD_TASK = "ADD_TASK"
const CHANGE_STATUS_TASK = "CHANGE_STATUS_TASK"
const REMOVE_TASK = "REMOVE_TASK"

let initialState = {
    tasks: [],
    inputText: '',
    counter: 0
}
    const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_TEXT:
            return {...state, inputText: action.newText}
        case ADD_TASK:
            let newInscription = {
                id: state.counter,
                taskName: state.inputText,
                status: false
            }

            return {
                ...state,
                tasks: [newInscription, ...state.tasks],
                inputText: "",
                counter: state.counter + 1
            }
        case CHANGE_STATUS_TASK:
            return {
                ...state,
                tasks: state.tasks.map(item => {
                    if (item.id === action.id) {
                        return {...item, status: !item.status}
                    }
                    return item
                })

            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.id)
            }
        default:
            return state
    }
}

export const updateNewTextActionCreator = (text) => ({type: UPDATE_NEW_TEXT, newText: text})
export const addTask = () => ({type: ADD_TASK})
export const changeStatusTaskActionCreator = (idTask) => ({type: CHANGE_STATUS_TASK, id: idTask})
export const removeTaskActionCreator = (idTask) => ({type: REMOVE_TASK, id: idTask})

export default appReducer