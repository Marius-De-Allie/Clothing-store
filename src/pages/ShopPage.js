import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../components/CategoriesOverview';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}/:category`} component={CategoriesOverview} />
    </div>

);

export default ShopPage;