import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../App';

it('App component renders properly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});