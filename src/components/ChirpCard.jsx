import React from 'react';

const ChirpCard = (props) => {
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    {props.chirp.text}
                </p>
                <button onClick={() => { props.onDestroy(props.chirp.id); }} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default ChirpCard;