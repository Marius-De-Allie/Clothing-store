import React from 'react';
import { Route } from 'react-router-dom';

import CategoriesOverview from '../components/CategoriesOverview';
import CategoryPage from './CategoryPage';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CategoriesOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>

);

export default ShopPage;