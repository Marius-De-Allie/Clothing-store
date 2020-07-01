import cartReducer from '../../redux/reducers/cart';
import * as cartActions from '../../redux/actions/cart';

describe('Cart reducer', () => {
    it('returns inital state when no state or action object is passed in', () => {
        expect.assertions(1);
        expect(cartReducer(undefined, {})).toEqual({
            hidden: true,
            items: []
        });
    });
    it('handles ADD_ITEM action', () => {
        const mockItem = {
            id: 1,
            name: 'blue shirt',
            price: 0
        }
        expect.assertions(1);
        expect(cartReducer(undefined, cartActions.addItem(mockItem))).toEqual({
            hidden: true,
            items: [{
                id: 1,
                name: 'blue shirt',
                price: 0,
                quantity: 1
            }]
        });
    });
    it('handles TOGGLE_HIDDEN action', () => {
        expect.assertions(1);
        expect(cartReducer(undefined, cartActions.toggleHidden())).toEqual({
            hidden: false,
            items: []
        });
    });
    it('handles REMOVE_CARTITEM action', () => {
        const mockInitialState = {
            hidden: true,
            items: [
                {
                    id: 1,
                    name: 'blue shirt',
                    price: 10,
                    quantity: 1
                },
                {
                    id: 2,
                    name: 'black jacket',
                    price: 20,
                    quantity: 1
                }
            ]
        };
        expect.assertions(1);
        expect(cartReducer(mockInitialState, cartActions.removeCartItem(2))).toEqual({
            hidden: true,
            items: [
                {
                    id: 1,
                    name: 'blue shirt',
                    price: 10,
                    quantity: 1
                }
            ]
        });
    });
    it('handles REMOVE_ITEM action', () => {
        const mockInitialState = {
            hidden: true,
            items: [
                {
                    id: 1,
                    name: 'blue shirt',
                    price: 10,
                    quantity: 3
                }
            ]
        };

        expect.assertions(1);
        expect(cartReducer(mockInitialState, cartActions.removeItem(mockInitialState.items[0]))).toEqual({
            hidden: true,
            items: [
                {
                    id: 1,
                    name: 'blue shirt',
                    price: 10,
                    quantity: 2
                }
            ]
        });
    });
});