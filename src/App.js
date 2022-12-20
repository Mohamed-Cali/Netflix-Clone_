import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
      } else {
        // Logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
       <title>Netflix 2.0</title>
      
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            
              <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route exact path="/" >
              
                <HomeScreen />
              
              </Route> 
              
            
          </Switch>
        )}
      </Router>
     


    </div>
  );
}

export default App;
