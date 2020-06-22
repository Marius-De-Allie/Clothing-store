import React from 'react';
import { connect } from 'react-redux';
import CategoryPreview from './CategoryPreview';
// Styles.
import '../styles/categoriesOverview.scss';

const CategoriesOverview = ({ collections }) => (
    <div className="categories-overview">
        {collections.map(collection => 
            <CategoryPreview 
                key={collection.id}
                {...collection}
            />
        )}
    </div>
);

const mapStateToProps = ({ shop  }) => ({
    collections: shop.collections ? Object.keys(shop.collections).map(key => shop.collections[key]) : []
});


export default connect(mapStateToProps)(CategoriesOverview);