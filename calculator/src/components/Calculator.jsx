import React, { Component } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';
import CalcButtons from './CalcButtons';
import '../style/calculator.css';

export default class Calculator extends Component {
    state = {
        statement: [],
        calcResult: ''
    }

    isCheckNumber = (text) => {
        return Number.isNaN(parseInt(text));
    }
    
    appendState = ({target: { textContent }}) => {
        const { statement } = this.state;
        const lastElement = statement[statement.length - 1];

        // 기호가 연속으로 나오는 것 방지
        (
            this.isCheckNumber(textContent)
            &&
            this.isCheckNumber(lastElement)
        ) || this.setState({
            statement: [
                ...statement,
                textContent
            ]
        });
    }

    currentState = (statement) => {
        return statement.join('');
    }

    deleteAll = () => {
        this.setState({ statement: [], calcResult: '' });
    }

    showResult = () => {
        console.log('Result');
    }

    popStatement = () => {
        const { statement } = this.state;
        this.setState({
            statement: statement.filter((val, idx) =>
                idx !== statement.length - 1)
        });
    }

    render() {
        const { statement } = this.state;

        return (
            <div className="calculator">
                <CalculatorInput alignment={this.currentState(statement)}/>
                <CalculatorResult />
                <CalcButtons
                    appendState={this.appendState}
                    deleteAll={this.deleteAll}
                    showResult={this.showResult}
                    popStatement={this.popStatement}
                />
            </div>
        );
    }
}