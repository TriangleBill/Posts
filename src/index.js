import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { spamWordsMiddleware } from './redux/middleware';
import createSagaMiddleware from 'redux-saga'
import { sagaWathcer } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, spamWordsMiddleware, saga)
))

saga.run(sagaWathcer)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
