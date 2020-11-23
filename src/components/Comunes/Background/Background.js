import React from 'react';
import './Background.scss';
const Background = (props) => {
    const { children } = props;
    return (
        <div className="bg">
            {children}
        </div>
    )
}

export default Background;