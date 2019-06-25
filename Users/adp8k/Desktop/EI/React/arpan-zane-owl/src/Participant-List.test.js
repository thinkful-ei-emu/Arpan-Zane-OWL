import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './Participant-list'
import renderer from 'react-test-renderer';


describe('<ParticipantList />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<ParticipantList />, div);


        ReactDOM.unmountComponentAtNode(div);

    });

    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<ParticipantList />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});