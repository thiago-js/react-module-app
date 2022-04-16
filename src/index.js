import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, history, persistor} from './redux-config'

ReactDOM.render(
  <App store={store} history={history} persistor={persistor} />,
  document.getElementById('root')
);
