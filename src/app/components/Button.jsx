import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAddSymbolAction} from "../reducers/expressionReducer";
import {store} from "../index";
import {getAddHistoryItemAction} from "../actions/historyActions";

const Button = (props) => {
    const dispatch = useDispatch();
    const expression = useSelector(state => state.expression.expression);
    const historyLength = useSelector(state => state.history.items).length;

    const handleClick = (symbol) => {
        dispatch(getAddSymbolAction(expression, symbol));

        if (store.getState().expression.isFullEquation)
            dispatch(getAddHistoryItemAction({expression : store.getState().expression.expression, id : historyLength}));
    }

    return (
        <button onClick={() => handleClick(props.value)} value={props.value}>{props.value}</button>
    );
};

export default Button;