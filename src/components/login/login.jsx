import React, { Component } from 'react'

import './login.scss'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
        }
    }

    handleLogin = (e) => {
        e.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value }) // dynamically setting the prop value
    }

    render() {
        return (
            <div className='login'>
                <h2>Already Registered ?</h2>
                <span>Login with your email and password.</span>
                <form onSubmit={this.handleLogin}>
                    <label>Email: </label>
                    <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password: </label>
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login
