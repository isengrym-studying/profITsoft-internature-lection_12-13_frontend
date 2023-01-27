import {createStore, combineReducers} from 'redux'
import {expressionReducer} from "./expressionReducer";
import {historyReducer} from "./historyReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    expression: expressionReducer,
    history: historyReducer
})

export const store = createStore(rootReducer, composeWithDevTools());