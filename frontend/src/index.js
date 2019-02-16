import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Toplama from './Toplama.jsx';
import Cikarma from './Cikarma.jsx';
import Carpma from './Carpma.jsx';
import Bolme from './Bolme.jsx'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Toplama />, document.getElementById('top'));
ReactDOM.render(<Cikarma />, document.getElementById('cik'));
ReactDOM.render(<Carpma />, document.getElementById('cap'));
ReactDOM.render(<Bolme />, document.getElementById('bol'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
