import React from 'react'
import Accordion from './Accordion'
import ReactDOM from 'react-dom'


describe(`Accordion Component`, () => {
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})