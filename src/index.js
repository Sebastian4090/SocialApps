import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import  createLogger  from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { searchApps, requestApps } from './reducers';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration.js';
import { thunk } from 'redux-thunk';

const logger = createLogger;
const rootReducer = combineReducers({ searchApps, requestApps });
const store = 
  createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorkerRegistration.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

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
