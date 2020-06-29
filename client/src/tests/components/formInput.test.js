import React from 'react';
import { shallow } from 'enzyme';
import FormInput from '../../components/FormInput';

it('FormInput component renders properly', () => {
    const wrapper = shallow(<FormInput />);
    expect(wrapper).toMatchSnapshot();
});