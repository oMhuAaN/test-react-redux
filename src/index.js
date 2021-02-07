import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './ReactRedux/Store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
