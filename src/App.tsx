import * as React from 'react';
import './App.scss';


export default class App extends React.Component<{}, {}> {
  public render(): any {
    return (
      <div className="App">
          {this.props.children}
      </div>
    );
  }
}

