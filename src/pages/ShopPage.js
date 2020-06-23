import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoriesOverview from '../components/CategoriesOverview';
import CategoryPage from './CategoryPage';
import WithSpinner from '../components/WithSpinner';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import { updateCollections } from '../redux/actions/shop';

const CategoriesOverviewWithSpinner = WithSpinner(CategoriesOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
    // component state.
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // Dispatch updateCollections action.
            updateCollections(collectionsMap);
            // Set loading state value to false.
            this.setState(() => ({
                loading: false
            }));
        });
    }

    
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CategoriesOverviewWithSpinner  isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
};

const mapDispatchToProps = ({
    updateCollections
});


export default connect(null, mapDispatchToProps)(ShopPage);