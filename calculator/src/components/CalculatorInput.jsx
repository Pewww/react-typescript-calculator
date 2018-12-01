import React from 'react';
import '../style/calculator-input.scss';

const CalculatorInput = ({ alignment }) => {
    return (
        <div className="calculator-input">
            <span className="calculator-input__alignment-text">{ alignment }</span>
        </div>
    );
}

export default CalculatorInput;
