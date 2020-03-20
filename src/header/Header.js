import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/profile/" className="badge badge-light">  Profile  </Link>
    <Link to="/update-info" className="badge badge-light">  Update my Info  </Link>
    <Link to="/add-resume" className="badge badge-light">  Add New resume  </Link>
    <Link to="/show-resumes" className="badge badge-light">  Show My Resumes  </Link>
    <Link to="/sign-out" className="badge badge-light">  Sign Out  </Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" className="badge badge-light">  Sign Up  </Link>
    <Link to="/sign-in" className="badge badge-light">  Sign In  </Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/" className="badge badge-light">  Home  </Link>
  </React.Fragment>
)

const Header = ({ user, profile }) => (
  <header className="main-header">
    <h2>{user && <span>{`Welcome, ${user.firstName} ${user.lastName}`}</span>}</h2>
    <nav>
      {user ? authenticatedOptions : unauthenticatedOptions}
      {alwaysOptions}
    </nav>
  </header >
)

export default Header
