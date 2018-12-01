import React from 'react';
import '../style/calculator-input.css';

const CalculatorInput = ({ alignment }) => {
    return (
        <div className="input-cover">
            <span>{ alignment }</span>
        </div>
    );
}

export default CalculatorInput;
