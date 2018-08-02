import * as React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../component/Page';
import './index.scss';


export class Index2 extends React.Component<{}, {}> {
  public render() {
    return (
      <Page>
        <h1>跳转了</h1>
        <Link to="/">返回首页</Link>
      </Page>
    );
  }
}

