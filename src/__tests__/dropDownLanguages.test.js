import React from 'react';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import DropDownLanguages from '../dropDownLanguages';
import { languages } from '../data';

describe('Unit Test For DropDownLanguages Component', () => {
  it('Render main components', () => {
    const wrapper = shallow(<DropDownLanguages />);
    expect(wrapper.find('.language-item')).toHaveLength(languages.length + 1);
  });
})