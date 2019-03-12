import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import NamesList from '../namesList';

describe('Unit Test NamesList Component', () => {
  it('Renders static elements', () => {
    const wrapper = shallow(<NamesList />);
    expect(wrapper.find('.content-names')).toHaveLength(1);
  });
}) 
