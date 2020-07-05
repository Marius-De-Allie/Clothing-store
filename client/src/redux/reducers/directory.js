export const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?cs=srgb&dl=brown-fedora-hat-in-selective-focus-photography-35185.jpg&fm=jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?cs=srgb&dl=clothes-colorful-colourful-hanging-16170.jpg&fm=jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          imageUrl: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?cs=srgb&dl=three-unpaired-multicolored-leather-sneakers-on-display-2300334.jpg&fm=jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl: 'https://images.pexels.com/photos/2085118/pexels-photo-2085118.jpeg?cs=srgb&dl=woman-holding-her-hat-while-holding-her-camera-2085118.jpg&fm=jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?cs=srgb&dl=adult-dark-facial-expression-fashion-428340.jpg&fm=jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;