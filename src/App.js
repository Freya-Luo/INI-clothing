import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/home/home.jsx'
import Shop from './pages/shop/shop.jsx'
import Header from './components/header/header'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
            </Switch>
        </div>
    )
}

export default App
