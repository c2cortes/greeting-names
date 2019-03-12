import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import App from '../App';
import NamesList from '../namesList';
import DropDownLanguages from '../dropDownLanguages';

describe('Unit Test For App Component', () => {
  it('Render main components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NamesList)).toHaveLength(1);
    expect(wrapper.find(DropDownLanguages)).toHaveLength(1);
  });
}) 
