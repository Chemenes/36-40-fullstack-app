import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { BrowserRouter, Route } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';

import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Route exact path="*" component={AuthRedirect} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}