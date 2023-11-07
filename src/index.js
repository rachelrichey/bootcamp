import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'

const firebaseConfig = {
    apiKey: "AIzaSyACKUuyGzg-UEPjDFupD45f4OJ1urVb740",
    authDomain: "bootcamp-c7dde.firebaseapp.com",
    databaseURL: "https://bootcamp-c7dde-default-rtdb.firebaseio.com",
    projectId: "bootcamp-c7dde",
    storageBucket: "bootcamp-c7dde.appspot.com",
    messagingSenderId: "951650343935",
    appId: "1:951650343935:web:43011519e89b56385ee5ca"
  };

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer
    // firestore: firestoreReducer // <- needed if using firestore
  })

// Create store with reducers
const store = createStore(rootReducer)

  // react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
  }
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
            <App />
        </BrowserRouter>,
    </ReactReduxFirebaseProvider>
    </Provider>
    ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
