import React from 'react';
import { connect } from 'react-redux';
import CategoryItem from '../components/CategoryItem';

import '../styles/categoryPage.scss';

const CategoryPage = ({ collection }) => (
    <div className="category-page">
        <h2 className="title">{collection.title}</h2>
        <div className="items">
            {collection.items.map(item => <CategoryItem key={item.id} item={item} />)}
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    const mapCategoryToId = {
        hats: 1,
        sneakers: 2,
        jackets: 3,
        womens: 4,
        mens: 5
    };

    return {
        collection: state.shop.collections.find(collection => collection.id === mapCategoryToId[ownProps.match.params.categoryId])
    }
};

export default connect(mapStateToProps)(CategoryPage);