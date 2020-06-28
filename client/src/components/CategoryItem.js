import React from 'react';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import { addItem } from '../redux/actions/cart';
// styles.
import '../styles/categoryItem.scss';

const CategoryItem = ({ item, addItem }) => {

    const { imageUrl, name, price } = item;

    const handleClick = () => {
        addItem(item);
    };
    
    return  (
        <div className="category-item">
            <div 
                className="image"
                style={{backgroundImage: `url${imageUrl}`}}
            >
            </div>
            <div className="category-footer">
            
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={handleClick}>Add to cart</CustomButton>
        </div>
    );
};

const mapDispatchToProps = ({
    addItem
});

export default connect(null, mapDispatchToProps)(CategoryItem);