import * as cartActions from '../../redux/actions/cart';

describe('Cart actions', () => {
    it('addItem action creator returns correct action object', () => {
        const newItem = {
            id: 1,
            name: 'item 1',
            price: 5
        };

        const expectedAction = {
            type: cartActions.ADD_ITEM,
            item: newItem
        };
        expect(cartActions.addItem(newItem)).toEqual(expectedAction);
    });
    it('toggleHidden action creator returns correct action object', () => {
        const expectedAction = {
            type: cartActions.TOGGLE_HIDDEN,
        };
        expect(cartActions.toggleHidden()).toEqual(expectedAction);
    });
    it('removeCartItem action creator returns correct action object', () => {
        const expectedAction = {
            type: cartActions.REMOVE_CARTITEM,
            id: 123
        };
        expect(cartActions.removeCartItem(123)).toEqual(expectedAction);
    });
    it('removeItem action creator returns correct action object', () => {
        const itemtoRemove = {
            id: 1,
            name: 'item 1',
            price: 5
        };
        const expectedAction = {
            type: cartActions.REMOVE_ITEM,
            item: itemtoRemove
        };
        expect(cartActions.removeItem(itemtoRemove)).toEqual(expectedAction);
    });
});