import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../../components/CartItem';

test('CartItems component renders properly', () => {
    const wrapper = shallow(<CartItem item={{imageUrl: '', name:'', quantity: 0, price: 0}} />);
    expect(wrapper).toMatchSnapshot();
});