import React from 'react';


function ChatParticipants(props){
    return (
        <div>
            <p>{props.type}</p>
            <p>{props.message}</p>
            <p>{props.time}</p>
        </div>
    )
}

export default ChatParticipants;