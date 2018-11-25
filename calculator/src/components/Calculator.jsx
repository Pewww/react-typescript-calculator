import React, { Component } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';
import CalcButtons from './CalcButtons';
import '../style/calculator.css';

export default class Calculator extends Component {
    state = {
        statement: '',
        calcResult: ''
    }

    isCheckNumber = (text) => {
        return Number.isNaN(parseFloat(text));
    }
    
    appendState = ({target: { textContent }}) => {
        const { statement } = this.state;
        const lastElement = statement[statement.length - 1];

        // 기호가 처음부터 나오거나 연속으로 나오는 것 방지
        (
            this.isCheckNumber(textContent)
            &&
            this.isCheckNumber(lastElement)
        ) || this.setState({
            statement: statement + textContent
        });
    }

    deleteAll = () => {
        this.setState({
            statement: '',
            calcResult: ''
        });
    }

    comparePriority = (op1, op2) => {
        const OPERATOR_PRIORITY = {
            '%': 3,
            'x': 2,
            '/': 2,
            '+': 1,
            '-': 1
        };

        return OPERATOR_PRIORITY[op1] >= OPERATOR_PRIORITY[op2];
    }

    postFixNotation = (statement) => {
        const stack = [], outputQueue = [];
        const splitPostFix = statement.match(/[^\d()]+|[\d.]+/g);
        
        for (let idx = 0, postFixLeng = splitPostFix.length; idx < postFixLeng; idx++) {
            const element = splitPostFix[idx];
            const stackPeek = stack[stack.length - 1];

            if (this.isCheckNumber(element)) {
                while (stack.length && this.comparePriority(stackPeek, element)) {
                    outputQueue.push(stack.pop());
                }
                stack.push(element);
            } else {
                outputQueue.push(element);
            }
        }

        while (stack.length) {
            outputQueue.push(stack.pop());
        }
        
        return outputQueue;
    }

    calcPostFix = (outputQueue) => {
        const stack = [];
        const CALC_FUNC = {
            'x': (num1, num2) => num2 * num1,
            '/': (num1, num2) => num2 / num1,
            '%': (num1, num2) => num2 % num1,
            '+': (num1, num2) => num2 + num1,
            '-': (num1, num2) => num2 - num1
        };

        for (let idx = 0, queueLeng = outputQueue.length; idx < queueLeng; idx++) {
            const element = outputQueue[idx];

            if (this.isCheckNumber(element)) {
                const num1 = stack.pop(), num2 = stack.pop();
                stack.push(CALC_FUNC[element](num1, num2));
            } else {
                stack.push(parseFloat(element));   
            }
        }
        
        this.setState({
            calcResult: stack.pop()
        });
    }

    showResult = () => {
        const { statement } = this.state;
        const lastElement = statement[statement.length - 1];

        // Validation Check / Show Result
        this.isCheckNumber(lastElement)
            ?
            this.setState({ calcResult: 'Validation Error' })
            :
            this.calcPostFix(this.postFixNotation(statement));
    }

    popStatement = () => {
        const { statement } = this.state;
        this.setState({
            statement: statement.substring(0, statement.length - 1)
        });
    }

    render() {
        const {
            statement,
            calcResult
        } = this.state;

        return (
            <div className="calculator">
                <CalculatorInput alignment={ statement }/>
                <CalculatorResult result={ calcResult } />
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