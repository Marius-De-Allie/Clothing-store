import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../../components/ErrorBoundary';

describe('ErrorBoundary component', () => {
    it('renders properly', () => {
        const wrapper = shallow(<ErrorBoundary />);
        expect(wrapper).toMatchSnapshot();
    });
});