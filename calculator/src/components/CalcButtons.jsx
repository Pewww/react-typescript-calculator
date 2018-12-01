import React from 'react';
import '../style/calc-buttons.css';

const CalcButtons = ({appendState, deleteAll, showResult, popStatement}) => {
    return (
        <table className="calc-buttons">
            <tbody>
                <tr>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={deleteAll}
                            value="c"
                        >c</button>
                    </td>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={(e) => appendState(e)}
                            value="%"
                        >%</button>
                    </td>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={(e) => appendState(e)}
                            value="/"
                        >/</button>
                    </td>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={(e) => appendState(e)}
                            value="x"
                        >x</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="7"
                        >7</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="8"
                        >8</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="9"
                        >9</button>
                    </td>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={(e) => appendState(e)}
                            value="-"
                        >-</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="4"
                        >4</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="5"
                        >5</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="6"
                        >6</button>
                    </td>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={(e) => appendState(e)}
                            value="+"
                        >+</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="1"
                        >1</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="2"
                        >2</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="3"
                        >3</button>
                    </td>
                    <td>
                        <button
                            className="buttons gray"
                            onClick={popStatement}
                            value="<"
                        >{'<'}</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="0"
                        >0</button>
                    </td>
                    <td>
                        <button
                            className="buttons"
                            onClick={(e) => appendState(e)}
                            value="."
                            style={{ fontSize: '2rem', marginTop: '-11px' }}
                        >.</button>
                    </td>
                    <td colSpan="2">
                        <button
                            className="buttons equal"
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