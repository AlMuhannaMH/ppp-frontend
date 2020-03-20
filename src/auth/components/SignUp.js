import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../apiAuth'
import messages from '../messages'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      label: '',
      phone: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ firstName: '', lastName: '', username: '', label: '', phone: '', email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render() {
    const { firstName, lastName, username, label, phone, email, password, passwordConfirmation } = this.state

    return (
      <div className="display-5">
        <form className='auth-form' onSubmit={this.onSignUp}>
          <h3>Sign Up</h3>

          <label htmlFor="firstName">First Name</label>
          <input
            required
            name="firstName"
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            name="lastName"
            value={lastName}
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <label htmlFor="username">Username</label>
          <input
            required
            name="username"
            value={username}
            type="text"
            placeholder="username"
            onChange={this.handleChange}
          />
          <label htmlFor="label">Label</label>
          <input
            name="label"
            value={label}
            type="text"
            placeholder="label"
            onChange={this.handleChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            value={phone}
            type="text"
            placeholder="phone"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            value={email}
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            required
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-outline-secondary">Sign Up</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp)
