import React from 'react';
import CategoryItem from './CategoryItem';
// styles.
import '../styles/categoryPreview.scss';

const CategoryPreview = ({ title, items }) => {

    return (
        <div className="category-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((el, index) => index < 4).map(item => 
                    <CategoryItem key={item.id} item={item} />
                )}
            </div>
        </div>
    );
};

export default CategoryPreview;