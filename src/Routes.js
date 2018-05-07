import React from 'react'
import { Switch, Route } from 'react-router-dom'
// Components
import App from './App'
import HomeContainer from './components/home/HomeContainer'

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route render={() => <h2>Error 404</h2>} />
    </Switch>
)