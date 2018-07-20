import * as React from 'react';
import { browserHistory, Router } from 'react-router';
import './App.scss';
import routes from "./Routes";


export default class App extends React.Component<{}, {}> {
  public render(): any {
    return (
      <div className="App">
        <Router history={browserHistory} routes={routes} />
      </div>
    );
  }
}

