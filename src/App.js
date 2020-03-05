import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'

import './App.css'

import SignIn from './components/user/signIn'
import SignUp from './components/user/signUp'
import { Provider } from 'react-redux'
import store, { history } from './redux/store'
import Dashboard from './components/dashboard/dashboard'

function App () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="App">
                    <Switch>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    )
}

export default App
