import React from 'react';
import { shallow } from 'enzyme';
import SignIn from '../../components/SignIn';

it('SignIn component renders properly', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
})