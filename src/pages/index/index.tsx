import * as React from 'react';
import { Link } from 'react-router';
import './index.scss';


export default class Index extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container">
        <h1>React+Typescript</h1>
        <Link to="/index2">跳转</Link>
      </div>
    );
  }
}

