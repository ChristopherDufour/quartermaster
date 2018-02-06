import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: 'AIzaSyCXh2jkMgkDDwKWBz6MwfLYaSkRAbOGs6o',
  authDomain: 'quartermaster-791f3.firebaseapp.com',
  databaseURL: 'https://quartermaster-791f3.firebaseio.com',
  projectId: 'quartermaster-791f3',
  storageBucket: 'quartermaster-791f3.appspot.com'
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
