import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
import { auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/actions/user';
import ContactPage from './pages/ContactPage';
import './App.scss';

// Lazy load Homepage component.
const Homepage = lazy(() => import('./pages/Homepage'));
// Lazy load ShopPage component.
const ShopPage = lazy(() => import('./pages/ShopPage'));
// Lazy load SignInPage component.
const SignInPage = lazy(() => import('./pages/SignInPage'));
// Lazy load CheckOutPage component.
const CheckOutPage = lazy(() => import('./pages/CheckoutPage'));


export const App = ({ setCurrentUser, collectionsArray, currentUser }) => {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
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

    return () => {
      unsubscribeFromAuth();
    }
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/signin" render={() => currentUser ? <Redirect to="/" /> : <SignInPage />} />
            <Route exact path="/checkout" component={CheckOutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};
  

// class App extends React.Component {
//   unsubscribeFromAuth = null;
  
//   componentDidMount() {
//     const { setCurrentUser, collectionsArray } = this.props;
//     // Add new collection and documents to firebase DB (Run once).
//     // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items}) => ({title, items})));

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if(userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
//           console.log(snapShot.data());
//           // Dispatch setCurrentUser action.
//           setCurrentUser({
//               id: snapShot.id,
//               ...snapShot.data()
//           });
//         });

//       } else {
//         setCurrentUser(userAuth);
//       } 
//     })
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInPage />} />
//           <Route exact path="/checkout" component={CheckOutPage} />
//         </Switch>
//       </div>
//     );
//   }
// };

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser
  // collectionsArray: Object.keys(state.shop.collections).map(key => state.shop.collections[key])
});

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
