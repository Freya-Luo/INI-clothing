import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Home from './pages/home/home.jsx'
import Shop from './pages/shop/shop.jsx'
import Header from './components/header/header.jsx'
import LoginOrRegister from './pages/login-register/login-register.jsx'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/login' component={LoginOrRegister} />
            </Switch>
        </div>
    )
}

export default App
