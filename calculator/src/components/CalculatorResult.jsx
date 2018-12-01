import React from 'react';
import '../style/calculator-result.scss';

const CalculatorResult = ({ result }) => {
    return (
        <div className="calculator-result">
            <span className="calculator-result__result">{ result }</span>
        </div>
    );
}

export default CalculatorResult;