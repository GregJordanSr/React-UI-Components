import React from 'react';
import  './Footer.css';

const Footer = () => {
    return (
        <div className= 'footer'>
            <div className="icons"><i className="icon" className="far fa-comment"></i></div>
            <div className="icons"><i className="icon" className="fas fa-retweet"></i></div>
            <div className="icons"><i className="icon" className="fas fa-heart"></i></div>
            <div className="icons"><i className= 'icon' className="fas fa-envelope"></i></div>
        </div>
    );
}
export default Footer;



