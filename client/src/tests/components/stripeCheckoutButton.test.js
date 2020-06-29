import React from 'react';
import { shallow } from 'enzyme';
import StripeCheckoutButton from '../../components/StripeCheckoutButton';

it('StripeCheckoutButton component renders properly', () => {
    const wrapper = shallow(<StripeCheckoutButton />);
    expect(wrapper).toMatchSnapshot();
});