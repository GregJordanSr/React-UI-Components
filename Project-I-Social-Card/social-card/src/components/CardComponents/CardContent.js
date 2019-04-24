import React from 'react';
import './Card.css';


const CardContent = () => {
    return(
        <div className = "card-content">
            <p className = "paragraph">Get started with React</p>
            <p className = "paragraph">React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>

            <a href="https://www.reactjs.org" className = "paragraph  header-content link">reactjs.org</a>
        </div>
    );
}

export default CardContent;