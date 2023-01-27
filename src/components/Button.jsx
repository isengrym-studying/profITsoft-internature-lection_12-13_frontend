import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Button = (props) => {
    const dispatch = useDispatch();
    const expression = useSelector(state => state.expression.expression);
    const isFullEquation = useSelector(state => state.expression.isFullEquation);

    const handleClick = (symbol) => {
        dispatch({type: 'ADD_SYMBOL', symbol: symbol});

        if (isFullEquation)
            dispatch({type: 'ADD_HISTORY_ITEM', payload:{expression: expression}});
    }

    return (
        <button onClick={() => handleClick(props.value)} value={props.value}>{props.value}</button>
    );
};

export default Button;