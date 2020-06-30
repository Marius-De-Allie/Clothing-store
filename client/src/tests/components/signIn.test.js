import React from 'react';
import { shallow, mount } from 'enzyme';
import SignIn from '../../components/SignIn';

describe('SignIn component', () => {
    it('SignIn component renders properly', () => {
        const wrapper = shallow(<SignIn />);
        expect(wrapper).toMatchSnapshot();
    });
    // it('SignIn component state update correctly', () => {
    //     const wrapper = shallow(<SignIn />);
    //     wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'test@gmail.com' } });
    //     wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'password1' } });
    //     expect(wrapper.state()).toEqual({credentials: {
    //         email: 'test@gmail.com',
    //         password: 'password1'
    //     }});
    // });
    // it('SignIn component onSubmit handler gets called when form is submitted', () => {
    //     const mockonSubmitHandler = jest.fn().mockReturnValue('done');
    //     const wrapper = shallow(<SignIn onSubmit={mockonSubmitHandler} />);
    //     wrapper.find('form').simulate('submit');
    //     expect(mockonSubmitHandler.mock.calls.length).toBe(1);
    // });

    
});
