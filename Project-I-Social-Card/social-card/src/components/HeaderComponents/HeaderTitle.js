import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import moment from 'moment';




const HeaderTitle = () => {
    return (
        <div className = "header-wrap">
            <div className = "header-title">
            Lambda School<span className = "twit">@LambdaSchool •</span><span className = "date">{moment().format('D MMM')}</span>
            <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderTitle;
