import React from 'react';

function Participant(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.avatar} alt="avatar"/>
            <p>{props.inSession ? 'In Session':''}</p>
            <p>{props.onStage? 'On Stage':''}</p>
        </div>
    )
}

export default Participant;