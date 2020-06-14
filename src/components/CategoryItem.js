import React from 'react';
// styles.
import '../styles/categoryItem.scss';

const CategoryItem = ({imageUrl, name, price}) => (
    <div className="category-item">
        <div 
            className="image"
            style={{backgroundImage: `url${imageUrl}`}}
        >
        </div>
        <div className="category-footer">
        
            <span className="name">{name}</span>
            <span className="price">{`$${price}.00`}</span>
        </div>
        <button>ADD TO CART</button>
    </div>
);

export default CategoryItem;