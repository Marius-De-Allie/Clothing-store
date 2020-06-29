import React from 'react';
import { shallow } from 'enzyme';
import WithSpinner from '../../components/WithSpinner';

it('WithSpinner component renders properly', () => {
    const wrapper = shallow(<WithSpinner />);
    expect(wrapper).toMatchSnapshot();
});