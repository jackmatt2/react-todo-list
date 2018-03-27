import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'

import 'bootstrap-float-label/dist/bootstrap-float-label.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
