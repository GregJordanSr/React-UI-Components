import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className="btn func" onClick={() => props.clickHandler(props.func)}>
            {props.func}
        </div>
    );
};
export default ActionButton;