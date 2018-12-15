import * as React from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';
import CalcButtons from './CalcButtons';
import '../style/calculator.scss';

const SPLIT_STATEMENT_REGEX = /[^\d()]+|[\d.]+/g;

interface IState {
    statement: string;
    calcResult: string;
    isSpotFlag: boolean;
}

type OutputQueue = string | number;

export default class Calculator extends React.Component {
    state: IState = {
        statement: '',
        calcResult: '',
        isSpotFlag: true
    }

    isCheckOperand = (text: string): boolean => {
        return Number.isNaN(parseFloat(text));
    }

    appendState = (
        { currentTarget: { value }
    }: React.FormEvent<HTMLButtonElement>) => {
        const {
            statement,
            isSpotFlag
        } = this.state;
        const lastElement = statement[statement.length - 1];

        /*
        입력 시 걸러내야 할 것
        1. 시작부터 연산자나 .이 나오는 경우
        2. 연산자나 .이 중복되서 나오는 경우
        3. 3.5.2와 같이 연산자를 만나기 전에 .이 2번 이상 나오는 경우
        */

        if (this.isCheckOperand(value)) {
            if (value === '.') {
                /*
                .을 입력할 수 있는 상태이고, statement의 마지막 글자가 숫자일 때,
                글자를 추가하고 .을 추가할 수 없는 상태로 변경한다.
                */
                (
                    isSpotFlag
                    &&
                    !this.isCheckOperand(lastElement)
                ) && this.setState({
                    statement: statement + value,
                    isSpotFlag: false
                });
            } else {
                !this.isCheckOperand(lastElement) && this.setState({
                    statement: statement + value,
                    isSpotFlag: true
                });
            }
        } else {
            this.setState({ statement: statement + value });
        }
    }

    deleteAll = (): void => {
        this.setState({
            statement: '',
            calcResult: '',
            isCheckOperand: true
        });
    }

    comparePriority = (op1: string, op2: string): boolean => {
        const OPERATOR_PRIORITY = {
            '%': 3,
            'x': 2,
            '/': 2,
            '+': 1,
            '-': 1
        };

        return OPERATOR_PRIORITY[op1] >= OPERATOR_PRIORITY[op2];
    }

    postFixNotation = (statement: string): string[] => {
        const stack = [];
        const outputQueue = [];
        const splitPostFix = statement.match(SPLIT_STATEMENT_REGEX);
        
        for (let idx = 0, postFixLeng = splitPostFix.length; idx < postFixLeng; idx++) {
            const element = splitPostFix[idx];
            const stackPeek = stack[stack.length - 1];

            if (this.isCheckOperand(element)) {
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

    calcPostFix = (outputQueue: OutputQueue[]) => {
        const stack: number[] = [];
        const calcPopNumbers = {
            'x': (num1: number, num2: number): number => num2 * num1,
            '/': (num1: number, num2: number): number => num2 / num1,
            '%': (num1: number, num2: number): number => num2 % num1,
            '+': (num1: number, num2: number): number => num2 + num1,
            '-': (num1: number, num2: number): number => num2 - num1
        };

        for (let idx = 0, queueLeng = outputQueue.length; idx < queueLeng; idx++) {
            const element = outputQueue[idx];

            if (this.isCheckOperand(element as string)) {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(calcPopNumbers[element](num1, num2));
            } else {
                stack.push(parseFloat(element as string));   
            }
        }
        
        this.setState({
            calcResult: stack.pop()
        });
    }

    showResult = (): void => {
        const { statement } = this.state;
        const lastElement = statement[statement.length - 1];

        // 유효성 검사 / 결과 출력
        this.isCheckOperand(lastElement)
            ?
            this.setState({ calcResult: 'Validation Error' })
            :
            this.calcPostFix(this.postFixNotation(statement));
    }

    popStatement = (): void => {
        // TODO: setState 콜백 구문에 다시 setState를 하는 좋지 않은 코드 수정
        const { statement } = this.state;
        
        const changeSpotFlag = () => {
            // 구분 짓기 위해 변수명 변경 - 바꾸지 않아도 무방
            const { statement: currentStatement } = this.state;
            const splitStatement = currentStatement.match(SPLIT_STATEMENT_REGEX);
            
            // 정규식으로 분리한 배열의 마지막 요소가 .을 포함하고 있으면 flag는 false
            splitStatement && this.setState({
                isSpotFlag: !splitStatement[splitStatement.length - 1].includes('.')
            });
        }

        this.setState({
            statement: statement.substring(0, statement.length - 1)
        }, () => changeSpotFlag());
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