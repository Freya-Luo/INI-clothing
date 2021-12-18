import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/home/home.jsx'
import Shop from './pages/shop/shop.jsx'

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
            </Switch>
        </div>
    )
}

export default App
