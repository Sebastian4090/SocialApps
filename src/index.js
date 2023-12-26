import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createLogger  from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchApps } from './reducers';

const logger = createLogger;
const store = createStore(searchApps, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <Provider store={store}>
          <App />
        </Provider>
    </div>
  </React.StrictMode>
);

reportWebVitals();
