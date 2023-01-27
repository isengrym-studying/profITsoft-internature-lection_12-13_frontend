import {createStore, combineReducers, applyMiddleware} from 'redux'
import {expressionReducer} from "./reducers/expressionReducer";
import {historyReducer} from "./reducers/historyReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import {examplesReducer} from "./reducers/examplesReducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    example: examplesReducer,
    expression: expressionReducer,
    history: historyReducer
})

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store = createStore(rootReducer, composedEnhancer);