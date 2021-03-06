import { applyMiddleware, createStore } from "redux";
import reducer from "../modules/counter/reducer";
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

export const defaultState = {
    counter: 0
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;