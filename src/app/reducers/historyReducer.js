import {ADD_HISTORY_ITEM, SOLVE_EXPRESSIONS} from "../actions/historyActions";
import * as expressionActions from "../actions/expressionActions";

const defaultState = {
    items: []
};

export const historyReducer = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_HISTORY_ITEM:
            return {...state, items:[...state.items, action.payload]};
        case SOLVE_EXPRESSIONS:
            let expressions = [...action.expressions];
            expressions = expressions.map((expression, index) => {
                return {id: index + state.items.length, expression: expressionActions.calculateResult(expression)};
            })
            return {...state, items:[...state.items, ...expressions]}
        default:
            return state;
    }
}