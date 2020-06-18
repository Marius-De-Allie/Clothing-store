import React from 'react';
import { connect } from 'react-redux';
import CategoryPreview from '../components/CategoryPreview';

class ShopPage extends React.Component {

    render() {
        const { collections } = this.props;
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

const mapStateToProps = ({ shop }) => ({
    collections: shop.collections
});

export default connect(mapStateToProps)(ShopPage);