import React from 'react'
import './style.scss';
import logo from "../../logo.png"
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className='auth'>
      <div className="banner login">
        <div className="top">
          <div className="wrapper">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix? <b><Link to='/register'>Sign up now.</Link></b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login