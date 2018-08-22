import React, { PropTypes } from 'react';
import '../styles/button.scss';
const Button = ({ data }) =>
    <div className="productButton">
        <div className="productButton-text">
            {data.text}
            <div className="productButton-arrow">&#9654;</div>
        </div>

    </div>;

Button.propTypes = {
    data: PropTypes.object
};

export default Button;
