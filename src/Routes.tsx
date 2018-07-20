import * as React from 'react';
import { IndexRoute, Route, Router } from 'react-router';
import Index from "./pages/index";
import Index2 from "./pages/index2";

const routes = (
    <Router>
        <Route path="/" component={Index}>
            <IndexRoute component={Index} />
        </Route>
        <Route path="index2" component={Index2} />
    </Router>
);

export default routes;