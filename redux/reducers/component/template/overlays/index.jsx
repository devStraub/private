import messageReducer from './message'
import dialogReducer from './dialog'

const overlayReducers = {
    message: messageReducer,
    dialog: dialogReducer,
}

export default overlayReducers;