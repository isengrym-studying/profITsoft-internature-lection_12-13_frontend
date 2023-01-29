import React from 'react';
import {useSelector} from "react-redux";
import MUIInput from '@mui/material/Input';

const Display = () => {
    const displayExpression = useSelector(state => state.expression.expression);

    return (
        <MUIInput sx={{mb:1, mt:2}}
                  value={displayExpression}
                  type="text"
                  disabled="disabled"/>
    );
};

export default Display;