import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInPage from './pages/SignInPage';
import CheckOutPage from './pages/CheckoutPage';
import { auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/user';
import './App.css';


class App extends React.Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    // Add new collection and documents to firebase DB (Run once).
    addCollectionAndDocuments('collections', collectionsArray.map(({ title, items}) => ({title, items})));

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          // Dispatch setCurrentUser action.
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
      } 
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInPage />} />
          <Route exact path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  collectionsArray: Object.keys(state.shop.collections).map(key => state.shop.collections[key])

});

const mapDispatchToProps = ({
  setCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
