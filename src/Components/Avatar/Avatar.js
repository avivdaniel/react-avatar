import React from 'react';
import './Avatar.css';

export function Avatar(props) {
    return (
        <div className="Avatar">
            <h2 className="text-white">My Avatar!</h2>
            <img src={props.url} className={props.shape} width={props.width} alt='' />
        </div>
    )
}