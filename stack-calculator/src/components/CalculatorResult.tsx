import * as React from 'react';
import '../style/calculator-result.scss';

interface IProps {
    result: string;
}

const CalculatorResult: React.SFC<IProps> = ({ result }) => {
    return (
        <div className="calculator-result">
            <span className="calculator-result__result">{ result }</span>
        </div>
    );
}

export default CalculatorResult;