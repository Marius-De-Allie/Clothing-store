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
    it('returns updated state with new item when action type of ADD_ITEM is passed in(dispatched)', () => {
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
    it('returns updated hidden piece of state when action type of TOGGLE_HIDDEN is passed in(dispatched)', () => {
        expect.assertions(1);
        expect(cartReducer(undefined, cartActions.toggleHidden())).toEqual({
            hidden: false,
            items: []
        });
    });
    it('returns updated state with item removed when action type of REMOVE_CARTITEM is passed in(dispatched)', () => {
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
    it('returns updated state with item quantity decremented by 1 when action type of REMOVE_ITEM is passed in(dispatched)', () => {
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