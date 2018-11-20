import React from 'react';
import '../style/calc-buttons.css';

const CalcButtons = ({appendState, deleteAll, showResult, popStatement}) => {
    return (
        <table className="calc-buttons">
            <tbody>
                <tr>
                    <td>
                        <div className="buttons gray" onClick={deleteAll}>
                            <span>c</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons gray" onClick={(e) => appendState(e)}>
                            <span>%</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons gray" onClick={(e) => appendState(e)}>
                            <span>/</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons gray" onClick={(e) => appendState(e)}>
                            <span>x</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>7</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>8</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>9</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons gray" onClick={(e) => appendState(e)}>
                            <span>-</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>4</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>5</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>6</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons gray" onClick={(e) => appendState(e)}>
                            <span>+</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>1</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>2</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>3</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons gray" onClick={popStatement}>
                            <span>{'<'}</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>0</span>
                        </div>
                    </td>
                    <td>
                        <div className="buttons" onClick={(e) => appendState(e)}>
                            <span>00</span> 
                        </div>
                    </td>
                    <td colSpan="2">
                        <div className="buttons equal" onClick={showResult}>
                            <span>=</span> 
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default CalcButtons;