import React from 'react';
import ReactDOM from 'react-dom';
import ChatParticipant from './ChatParticipant'
import renderer from 'react-test-renderer';


describe('<ChatParticipant />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<ChatParticipant type="message" message="Hello" time="1548852646559" />, div);


        ReactDOM.unmountComponentAtNode(div);

    });

    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<ChatParticipant type="message" message="Hello" time="1548852646559"/>).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});