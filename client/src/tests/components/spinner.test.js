import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner';

it('Spinner component renders properly', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
});