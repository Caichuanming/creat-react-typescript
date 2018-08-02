import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import { Index } from "./pages/index";
import { Index2 } from "./pages/index2";

// 入口
ReactDOM.render(
    (
        <HashRouter basename="/">
            <App>
                <Route exact={true} path="/" component={Index} />
                <Route path="/index2" component={Index2} />
            </App>
        </HashRouter>
    ),
    document.getElementById('root') as HTMLElement
);
