import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const History = () => {
    const historyItems = useSelector(state => state.history.items);

    return (
        <div className="history">
            <button className="getTaskButton">Получить и решить примеры</button>
            <div className="params">
                <input id = "quantity-input"
                       className="quantity-input"
                       type="number"/>
            </div>

            <div className="items">
                {historyItems.length > 0 ?
                    <div>
                        {historyItems.map(item =>
                            <div>{item.expression}</div>
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