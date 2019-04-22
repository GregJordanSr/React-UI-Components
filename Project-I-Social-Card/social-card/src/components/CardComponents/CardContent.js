import React from 'react';
import './Card.css';


const CardContent = () => {
    return(
        <div className = "card-content">
        <p className = "paragraph">Get started with React</p>
        <p className = "paragraph">React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>

        <p><a href="https://www.reactjs.org" className = "link">reactjs.org</a></p>
        </div>
    );
}

export default CardContent;