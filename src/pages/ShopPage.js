import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../components/CategoriesOverview';
import CategoryPage from './CategoryPage';

class ShopPage extends React.Component {

    render() {
        return (
            <div className="shop-page">
                <Route exact path={`${this.props.match.path}`} component={CategoriesOverview} />
                <Route path={`${this.props.match.path}/:categoryId`} component={CategoryPage} />
            </div>
        )

    }
};


export default ShopPage;