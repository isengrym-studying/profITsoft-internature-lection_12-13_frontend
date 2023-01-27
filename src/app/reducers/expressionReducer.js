import {ADD_SYMBOL} from "../actions/expressionActions";
import * as expressionActions from "../actions/expressionActions";


const defaultState = {
    expression: "",
    isFullEquation: false
}

export const expressionReducer = (state=defaultState, action) => {

    switch(action.type) {
        case ADD_SYMBOL:
            let symbol = action.symbol;
            let expression = action.expression;
            return expressionActions.processGivenSymbol(state, expression, symbol);
        default:
            return state;
    }
}

export const getAddSymbolAction = (expression, symbol) => ({type: ADD_SYMBOL, expression, symbol})


