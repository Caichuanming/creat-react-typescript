import * as React from 'react';
import { Link } from 'react-router';
import './index.scss';


export default class Index2 extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="container">
        <h1>跳转了</h1>
        <Link to={"/"} >1111</Link>
      </div>
    );
  }
}

