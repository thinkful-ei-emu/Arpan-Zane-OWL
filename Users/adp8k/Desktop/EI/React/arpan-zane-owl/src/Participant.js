import React from 'react';

function Participant(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.avatar} alt="avatar"/>
            <p>{props.inSession.toString()}</p>
            <p>{props.onStage.toString()}</p>
        </div>
    )
}

export default Participant;