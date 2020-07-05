import React from 'react';
import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
// styles.
import '../styles/categoryPreview.scss';

const CategoryPreview = ({ title, items, routeName }) => {

    return (
        <div className="category-preview">
            <h1 className="title">
                <Link className="cat-link" to={`/shop/${routeName}`}>{title}</Link>
            </h1>
            <div className="preview">
                {items.filter((el, index) => index < 4).map(item => 
                    <CategoryItem key={item.id} item={item} />
                )}
            </div>
        </div>
    );
};

export default CategoryPreview;