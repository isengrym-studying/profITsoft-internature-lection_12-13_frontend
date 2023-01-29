import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {fetchExamples} from "../actions/async/examplesAsyncActions";
import MUIButton from '@mui/material/Button';
import MUIInput from '@mui/material/Input';
const History = () => {
    let [quantity, setQuantity] = useState("1");
    const dispatch = useDispatch();
    const historyItems = useSelector(state => state.history.items);

    function processExamples(quantity) {
        dispatch(fetchExamples(quantity));
    }

    return (
        <div className="history">
            <MUIButton variant="contained"
                       sx={{mt: 2, mb:1}}
                       onClick={() => processExamples(quantity)}
                       className="getTaskButton">
                Получить и решить примеры
            </MUIButton>

            <div className="params">
                <MUIInput value={quantity}
                       onChange={event => setQuantity(event.target.value)}
                       id = "quantity-input"
                       className="quantity-input"
                       type="number"/>
            </div>

            <div className="items">
                {historyItems.length > 0 ?
                    <div>
                        {historyItems.map(item =>
                            <div key={item.id}>{item.expression}</div>
                        )}
                    </div>
                    :
                    <div>
                        История пуста
                    </div>
                }
            </div>
        </div>
    );
};

export default History;