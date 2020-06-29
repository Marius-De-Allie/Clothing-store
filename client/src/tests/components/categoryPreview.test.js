import React from 'react';
import { shallow } from 'enzyme';
import CategoryPreview from '../../components/CategoryPreview';

it('CategoryPreview component renders propery', () => {
    // Mock array to pass into CategoryPreview comp.
    const mockItems = [
        {
            id: 1,
            imageUrl: '',
            name: '', 
            price: 0
        }
    ];
    
    const wrapper = shallow(<CategoryPreview items={mockItems} />);
    expect(wrapper).toMatchSnapshot();
});