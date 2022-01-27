import React, { Component } from 'react'

import './register.scss'
import FormInput from '../form-input/form-input'
import Button from '../button/button'
import { auth, createUser } from '../../firebase/firebase.utils'

class Register extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleRegister = async (event) => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert('Password do not match.')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUser(user, { displayName })

            // clear out the register form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className='register'>
                <h2 className='title'>I am a new user</h2>
                <span>Sign up with your email and password</span>
                <form className='form' onSubmit={this.handleRegister}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='Username: '
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                    />
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
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='Confirm Password: '
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        required
                    ></FormInput>
                    <Button type='submit'>Register</Button>
                </form>
            </div>
        )
    }
}

export default Register
