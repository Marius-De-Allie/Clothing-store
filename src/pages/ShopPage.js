import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoriesOverview from '../components/CategoriesOverview';
import CategoryPage from './CategoryPage';
import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import { updateCollections } from '../redux/actions/shop';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        console.log('REF', collectionRef)
        collectionRef.onSnapshot(async snapshot => {
            console.log('SNAPSHOT', snapshot)
            // const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            // updateCollections(collectionsMap);
        })

    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CategoriesOverview} />
                <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
            </div>
        )

    }
};

const mapDispatchToProps = ({
    updateCollections
});


export default connect(null, mapDispatchToProps)(ShopPage);