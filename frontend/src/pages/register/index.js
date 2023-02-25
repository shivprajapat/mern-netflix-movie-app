import React, { useRef, useState } from 'react'
import './style.scss';
import logo from "../../logo.png"
import { Link } from 'react-router-dom';
const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <section className='auth'>
      <div className="banner register">
        <div className="top">
          <div className="wrapper">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <button className="loginButton"><Link to='/login'>Sign In</Link></button>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Register