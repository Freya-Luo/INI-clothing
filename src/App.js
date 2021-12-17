import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/home/home.jsx'

const Hats = () => {
    return <h2>Hats page</h2>
}
function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop/hats' component={Hats} />
            </Switch>
        </div>
    )
}

export default App
