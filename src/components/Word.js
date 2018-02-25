import React from 'react';

export default (props) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{props.word}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{props.definition}</h6>
                <p className="card-text word__example">{props.example_a}</p>
                <p className="card-text word__example">{props.example_b}</p>
                <p className="card-text word__example">{props.example_c}</p>
            </div>
        </div>
    );
};