import React from 'react';
import './Header.css';
import './HeaderTitle';

const HeaderContainer = () => {
    return (
        <div className = "header-container">
        <ImageThumbnail />
        <HeaderTitle />
        </div>
    );
}

export default HeaderContainer;
