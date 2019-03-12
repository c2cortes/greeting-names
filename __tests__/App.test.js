import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../src/App';

describe('Unit Test For App Component', () => {
  it('renders without crashing ###', () => {
    const wrapper = shallow(<App />);
  });
}) 
