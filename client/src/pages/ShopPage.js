import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoriesOverview from '../components/CategoriesOverview';
import CategoryPage from './CategoryPage';
import WithSpinner from '../components/WithSpinner';
import { fetchCollectionsAsync } from '../redux/actions/shop';

const CategoriesOverviewWithSpinner = WithSpinner(CategoriesOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

const ShopPage = ({ fetchCollectionsAsync, match, isLoading }) => {

    useEffect(() => {
        // Dispatch fetchCollectionsAsync asynchronous action creator to fetch shop collections.
        fetchCollectionsAsync();
    }, [fetchCollectionsAsync]);

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => <CategoriesOverviewWithSpinner  isLoading={isLoading} {...props} />} />
            <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={isLoading} {...props} />} />
        </div>
    );
};

const mapStateToProps = ( state, ownProps) => ({
    isLoading: state.shop.isLoading,
    match: ownProps.match
});

const mapDispatchToProps = ({
    fetchCollectionsAsync
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);