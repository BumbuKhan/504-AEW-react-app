import React from 'react';

export default ({id, title}) => {

    return (
        <a href="" className="list-group-item list-group-item-action">{title}
            <span className="badge badge-primary badge-pill lessons-list__badge">12</span>
        </a>
    )
}