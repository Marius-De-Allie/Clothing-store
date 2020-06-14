import React from 'react';
import CategoryPreview from '../components/CategoryPreview';

import SHOP_DATA from '../services/shopData';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(collection => 
                    <CategoryPreview 
                        key={collection.id}
                        {...collection}
                    />
                )}
            </div>
        )
    }

};

export default ShopPage;