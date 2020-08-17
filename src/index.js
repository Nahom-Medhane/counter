import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counters from './Components/counters';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Components/counter.css';
ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Counters/>
=======
    <Counters />
>>>>>>> 8e74d70242a2ac1956b0c5299642e21bceb4da6e
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
