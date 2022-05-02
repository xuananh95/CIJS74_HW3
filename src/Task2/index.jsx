import React from 'react';
import './styles.css';

const Task2 = ({ onClick, count=0}) => {
    let value = "Show", textClass="hidden";
    if (count ===    1) {
        value = "Hide";
        textClass = "shown";
    }
    return (
        <div className="task2">
            <button className="btn" onClick={onClick}>{value}</button>
            <text className={textClass}>Some secret  text</text>
        </div>
    )
}

export default Task2