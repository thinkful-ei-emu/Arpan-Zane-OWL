import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage'
import renderer from 'react-test-renderer';


describe('<Stage/>', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Stage />, div);


        ReactDOM.unmountComponentAtNode(div);

    });

    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Stage />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});