import { defaultState } from "../../store/store";
import { ADD_COUNTER, REMOVE_COUNTER } from "./type";

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COUNTER:
            return {...state, counter: state.counter + action.payload}
        case REMOVE_COUNTER:
            return {...state, counter: state.counter - action.payload}
        default:
            return state
    }
}

export default reducer;