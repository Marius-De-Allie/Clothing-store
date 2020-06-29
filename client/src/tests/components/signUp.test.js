import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../../components/SignUp';

it('SignUp component renders properly', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
});