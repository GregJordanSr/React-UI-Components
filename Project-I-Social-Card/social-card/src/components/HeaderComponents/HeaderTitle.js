import React from 'react';
import './Header.css';
import moment from 'moment';


const HeaderTitle = () => {
    return (
        <div className = "header-wrap">
            <div className = "header-title">
            Lambda School<span className = "twit">@LambdaSchool •</span><span className = "date">{moment().format('D MMM')}</span>
            </div>
        </div>
    );
}

export default HeaderTitle;
