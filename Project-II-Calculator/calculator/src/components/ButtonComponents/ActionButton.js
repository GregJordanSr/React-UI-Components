import React from 'react';
import './Button.css';

const actionButtons = props => {
    return (
        <div className="btn func" onClick={() => props.clickHandeler(props.func)}>
            {props.func}
        </div>
    );
};
export default actionButtons;