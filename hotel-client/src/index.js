import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Layout } from './components';
import {
  Confirmation, Hotel, Landing, Admin,
} from './pages';

import configureStore from './store/store';


const routing = (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Landing} />
          <Route path="/confirmation/:token" component={Confirmation} />
          <Route path="/hotels/:id" component={Hotel} />
          <Route path="/admin" component={Admin} />
        </Layout>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
