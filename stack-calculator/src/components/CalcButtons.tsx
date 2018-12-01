import * as React from 'react';
import '../style/calc-buttons.scss';

interface IProps {
    appendState: (e: React.FormEvent<HTMLButtonElement>) => void;
    deleteAll: () => void;
    showResult: () => void;
    popStatement: () => void;
}

const CalcButtons: React.SFC<IProps> = ({
    appendState,
    deleteAll,
    showResult,
    popStatement
}) => {
    return (
        <table className="calc-buttons">
            <tbody>
                <tr>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={deleteAll}
                            value="c"
                        >c</button>
                    </td>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={appendState}
                            value="%"
                        >%</button>
                    </td>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={appendState}
                            value="/"
                        >/</button>
                    </td>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={appendState}
                            value="x"
                        >x</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="7"
                        >7</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="8"
                        >8</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="9"
                        >9</button>
                    </td>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={appendState}
                            value="-"
                        >-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="4"
                        >4</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="5"
                        >5</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="6"
                        >6</button>
                    </td>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={appendState}
                            value="+"
                        >+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="1"
                        >1</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="2"
                        >2</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="3"
                        >3</button>
                    </td>
                    <td>
                        <button
                            className="buttons buttons--gray"
                            onClick={popStatement}
                            value="<"
                        >{'<'}</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="0"
                        >0</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={appendState}
                            value="."
                            style={{ fontSize: '2rem', marginTop: '-11px' }}
                        >.</button>
                    </td>
                    <td colSpan={2}>
                        <button
                            className="buttons buttons--equal"
                            onClick={showResult}
                            value="="
                        >=</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default CalcButtons;