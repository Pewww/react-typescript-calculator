import * as React from 'react';
import '../style/calculator-input.scss';

interface IProps {
    alignment: string;
}

const CalculatorInput: React.SFC<IProps> = ({ alignment }) => {
    return (
        <div className="calculator-input">
            <span className="calculator-input__alignment-text">{ alignment }</span>
        </div>
    );
}

export default CalculatorInput;
