import React from 'react';

const Card = (props) => {    
    return (
        <div  className="ui card">
            <div className="content">{props.children}</div>
            <div className="text">{props.script}</div>
        </div>
    );
};

export default Card;