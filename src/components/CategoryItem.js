import React from 'react';
import CustomButton from './CustomButton';
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
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
);

export default CategoryItem;