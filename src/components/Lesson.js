import React from 'react';
import {Link} from 'react-router-dom';

export default ({id, title}) => {

    return (
        <Link to={`/lessons/${id}`} className="list-group-item list-group-item-action">{title}
            <span className="badge badge-primary badge-pill lessons-list__badge">12</span>
        </Link>
    )
}