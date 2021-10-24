import React, { useState } from 'react'
import AppContext from './AppContext'
import {
    Route,
    NavLink,
    HashRouter,
    Redirect
} from 'react-router-dom';

//Screens
import Signin from './screens/signin';
import Messenger from './screens/messenger';

//CSS

import './css/props.css'
import './css/App.css'


import * as firebase from 'firebase';

global.firebase = firebase;

const firebaseConfig = {
    apiKey: "AIzaSyCT0Trr9RwX4RYYdNgUb1JdUOmFOGdRuDI",
    authDomain: "whatsappweb-94139.firebaseapp.com",
    projectId: "whatsappweb-94139",
    storageBucket: "whatsappweb-94139.appspot.com",
    messagingSenderId: "28218934195",
    appId: "1:28218934195:web:e1b7a52f3155b32593c1c6",
    measurementId: "G-XVNQZY1209"
};

global.firebase.initializeApp(firebaseConfig);

//global

global.baseurl = "http://localhost:3000/";

global.fire = {
    me: {
        ID: 1
    }
}

function AppLoader(props) {

    const [FireUser, setFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log("You are Signed in");
                setFireUser(true);
                return <Redirect to="/" />

            } else {
                console.log("You are guest...");
                setTimeout(() => {
                    context.setAppLoaded(true);
                    setFireUser(false);
                    return <Redirect to="/signin" />

                }, 500);

            }
        })
    }

    const splash = () => {
        return (
            <div className="splash abs abc">
                <img src={global.baseurl + 'ui/logo192.png'} className="logo" alt="logo" />
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    return (
        <AppContext.Consumer>
            {
                context => {
                    return (context.appLoaded() ?
                        <div className="App">
                            <HashRouter>
                                <div className="app-content">
                                    <Route path="/" component={FireUser == true ? Messenger : Signin} />

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
