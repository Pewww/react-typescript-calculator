import React, { Fragment } from 'react';
import '../style/background-circles.scss';

const BackgroundCircles = () => (
    <Fragment>
        <div className="circles circles--blue"></div>
        <div className="circles circles--red"></div>
        <div className="circles circles--green"></div>
        <div className="circles circles--yellow"></div>
    </Fragment>
);

export default BackgroundCircles;