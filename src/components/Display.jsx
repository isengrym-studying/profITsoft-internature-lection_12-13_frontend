import React from 'react';
import {useSelector} from "react-redux";

const Display = () => {
    const displayExpression = useSelector(state => state.expression.expression);

    return (
        <input value={displayExpression} type="text" disabled="disabled"/>
    );
};

export default Display;