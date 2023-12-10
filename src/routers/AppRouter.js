import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from '../components/MainPage';
import AboutBot from '../components/AboutBot';
import AboutDev from '../components/AboutDev';
import Chat from '../components/Chat';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css/normalize.css';
import '../styles/styles.css';


const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/about-bot" component={AboutBot} />
                <Route path="/about-dev" component={AboutDev} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;