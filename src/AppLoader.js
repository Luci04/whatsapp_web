import React, { Component } from 'react'
import AppContext from './AppContext'
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Messenger from './screens/messenger';

//CSS

import './css/props.css'
import './css/App.css'

//global

global.baseurl = "http://localhost:3000/";

function AppLoader(props) {

    const splash = () => {
        return (
            <div className="splash abs abc">
                <img src={global.baseurl + 'ui/logo192.png'} className="logo" alt="logo" />
            </div>
        )
    }

    const loadApp = async (context) => {
        setTimeout(() => {
            context.setAppLoaded(true);
        }, 1000);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (context.appLoaded() ?
                        <div className="App">
                            <HashRouter>
                                <div className="app-content">
                                    <Route path="/" component={Messenger}>
                                    </Route>
                                </div>
                            </HashRouter>
                        </div>

                        : <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context)
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default AppLoader;
