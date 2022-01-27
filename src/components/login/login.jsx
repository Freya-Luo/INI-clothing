import React, { Component } from 'react'

import './login.scss'
import FormInput from '../form-input/form-input.jsx'
import Button from '../button/button'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
        }
    }

    handleLogin = async (e) => {
        e.preventDefault()

        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value }) // dynamically setting the prop value
    }

    render() {
        return (
            <div className='login'>
                <h2 className='title'>Already a member ?</h2>
                <span>Login with your email and password</span>
                <form onSubmit={this.handleLogin}>
                    <FormInput
                        type='email'
                        name='email'
                        label='Email: '
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        label='Password: '
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    ></FormInput>
                    <div className='buttons'>
                        <Button type='submit'>Login</Button>
                        <Button onClick={signInWithGoogle} isThirdPartyLogin>
                            Login with Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
