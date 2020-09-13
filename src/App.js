import React, { useEffect } from 'react';
import './App.css';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Checkout from './component/Checkout/Checkout';
import Payment from './component/Payment/Payment';
import Orders from './component/Orders/Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './Redux/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ReactGa from 'react-ga'

const promise = loadStripe('pk_test_51HQ8G6AKKub6FeRVwHkGeDvuTa6dSwE1esMggOrsrt8xQbJIEPiVjiBrNcKIVvyQT0TmkbakjrFeuOpAMNKsnAn100EDtjCkPa');

function App() {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    ReactGa.initialize('UA-161261812-1')
    ReactGa.pageview('/')
    //Run once only
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        // User Just Logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //User os Logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
