import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import { URL } from 'Common/Constants';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path={URL.HOME} exact component={Home} />
                <Route path={URL.TV} exact component={TV} />
                <Route path={URL.SEARCH} component={Search} />
                <Route path={URL.MOVIE + "/:id"} component={Detail} />
                <Route path={URL.SHOW + "/:id"} component={Detail} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)