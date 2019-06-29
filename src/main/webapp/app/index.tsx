import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import initStore from './config/store';
import { registerLocale } from './config/translation';
import ErrorBoundary from './shared/error/error-boundary';
import AppComponent from './app';

const store = initStore();
registerLocale(store);

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <div>
          <Component />
        </div>
      </Provider>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
