import * as React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../component/Page';
import './index.scss';


export class Index extends React.Component<{}, {}> {
  public render() {
    return (
      <Page>
        <h1>React+Typescript</h1>
        <Link to="/index2">跳转</Link>
      </Page>
    );
  }
}

