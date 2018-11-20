import React, { Component, Fragment } from 'react';
import '../style/background-circles.css';

export default class BackgroundCircles extends Component {
    render() {
        return (
            <Fragment>
                <div className="circles blue-circles"></div>
                <div className="circles red-circles"></div>
                <div className="circles green-circles"></div>
                <div className="circles yellow-circles"></div>
            </Fragment>
        );
    }
}