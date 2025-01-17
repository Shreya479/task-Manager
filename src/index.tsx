import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import './index.css';
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);