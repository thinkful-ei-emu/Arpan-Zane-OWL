import React from 'react';
import './App.css';
import ParticipantList from './Participant-list' 
import Stage from './Stage'

function App(props) {
  return (
    <div>
      <ParticipantList />
      <Stage/>
    </div>
  );
}

export default App;
