import React from 'react';
import '../style/calculator-result.css';

const CalculatorResult = ({ result }) => {
    return (
        <div className="calculator-result">
            <span>
                { result }
            </span>
        </div>
    );
}

export default CalculatorResult;