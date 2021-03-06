import React from 'react';
import Participant from './Participant'


function ParticipantList(props){

    const participants = [
        {
            id: 1,
            name: 'Koren Templeton',
            avatar:
                'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        },
        {
            id: 2,
            name: 'Caty Flucker',
            avatar:
                'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        },
        {
            id: 3,
            name: 'Axe Kubicka',
            avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
            inSession: false,
            onStage: false
        },
        {
            id: 4,
            name: 'Frank Runciman',
            avatar:
                'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        },
        {
            id: 5,
            name: 'Ashla Attwool',
            avatar:
                'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        }
    ];

const list = participants.sort(function compare(a,b){
    if(a.inSession<b.inSession){
        return 1;
    }
    else if(a.inSession>b.inSession){
        return -1;
    }
    else{
        if(a.name>b.name){
            return 1;
        }
        else if(a.name<b.name){
            return-1;
        }
        return 0;
        

    }
}).map(person => <Participant key={person.id} name={person.name} avatar={person.avatar} inSession={person.inSession} onStage={person.onStage} />)
console.log(list);

return (
    <div>
       {list}
    </div>
)

}

export default ParticipantList;
