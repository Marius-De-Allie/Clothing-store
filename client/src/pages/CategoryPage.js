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

const mapStateToProps = (state, ownProps) => ({
    collection: state.shop.collections ? state.shop.collections[ownProps.match.params.categoryId] : null
});

export default connect(mapStateToProps)(CategoryPage);