import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component/>
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
