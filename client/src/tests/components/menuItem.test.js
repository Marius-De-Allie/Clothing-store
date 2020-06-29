import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../../components/MenuItem';

it('MenuItem component renders properly', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper).toMatchSnapshot();
});