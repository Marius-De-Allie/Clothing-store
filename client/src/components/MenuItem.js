import React from 'react';
import { useHistory } from 'react-router-dom';
// styles.
import '../styles/menuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();

    const onMenuClick = () => {
        history.push(`/${linkUrl}`)
        
    };
    
    return (
        <div 
            className={`${size} menu-item`}
            style={{backgroundImage: `url(${imageUrl})`}}
            onClick={onMenuClick}

        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

    );
};

export default MenuItem;