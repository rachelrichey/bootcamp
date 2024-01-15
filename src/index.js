import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
  apiKey: "AIzaSyACKUuyGzg-UEPjDFupD45f4OJ1urVb740",
  authDomain: "bootcamp-c7dde.firebaseapp.com",
  databaseURL: "https://bootcamp-c7dde-default-rtdb.firebaseio.com",
  projectId: "bootcamp-c7dde",
  storageBucket: "bootcamp-c7dde.appspot.com",
  messagingSenderId: "951650343935",
  appId: "1:951650343935:web:43011519e89b56385ee5ca"
};

firebase.initializeApp(firebaseConfig);
firebase.functions().useFunctionsEmulator('http://localhost:5001');

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  preserveOnLogout: ['homepage'],
  userProfile: 'users',
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
