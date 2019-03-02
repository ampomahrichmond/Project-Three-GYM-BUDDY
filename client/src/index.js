import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyCtj4Tw-NhWnw2j28JFRwKl2PHHEVakmGo",
  authDomain: "react-gym-app.firebaseapp.com",
  databaseURL: "https://react-gym-app.firebaseio.com",
  projectId: "react-gym-app",
  storageBucket: "",
  messagingSenderId: "973333600791"
};
  
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

