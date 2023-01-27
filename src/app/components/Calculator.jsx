import React from 'react';
import Button from "./Button";
import Display from "./Display";
import History from "./History";

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="display">
                <Display/>
            </div>
            <div className="buttonLine">
                <Button value="1"/>
                <Button value="2"/>
                <Button value="3"/>
                <Button value="+"/>

            </div>
            <div className="buttonLine">
                <Button value="4"/>
                <Button value="5"/>
                <Button value="6"/>
                <Button value="-"/>
            </div>
            <div className="buttonLine">
                <Button value="7"/>
                <Button value="8"/>
                <Button value="9"/>
                <Button value="*"/>
            </div>

            <div className="buttonLine">
                <Button value="AC"/>
                <Button value="0"/>
                <Button value="="/>
                <Button value="/"/>
            </div>

            <History/>
        </div>
    );
};

export default Calculator;