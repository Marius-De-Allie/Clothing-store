import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from '../../components/CustomButton';

it('CustomButton component renders properly', () => {
    const wrapper = shallow(<CustomButton />);
    expect(wrapper).toMatchSnapshot();
});