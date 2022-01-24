import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/userActions'
import Logo from "./../../assets/img/logo-full.png"

export const FormLogin = () => {
    const [userCred, setUserCred] = useState({})
    const dispatch = useDispatch()
    const [emailPageVisibility, setEmailPageVisibility] = useState('block')
    const [passwordPageVisibility, setPasswordPageVisibility] = useState('none')

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setUserCred({ ...userCred, [field]: value })
    }

    const showPasswordPage = () => {
        if(!userCred.email) {
            alert('Please enter a valid email')
            return
        }
        setPasswordPageVisibility('block')
        setEmailPageVisibility('none')
    }

    const showEmailPage = () => { //NB cld combine this with the previous function
        setPasswordPageVisibility('none')
        setEmailPageVisibility('block')
    }

    const doLogin = () => {
        dispatch(login(userCred))

    }

    return (
        <div className="form-login" >
            <div className="login-header flex">
                <img className="logo-full" src={Logo} alt="" />
            </div>
            <div className="login-wrapper">
                <div className="login-content">
                    <h1 className="login-title">Log in to your account</h1>
                    <div className="email-page" style={{ display: emailPageVisibility }}>
                        <div className="email-input-wrapper">
                            <label htmlFor="email">Enter your work email address</label>
                            <input type="email" name="email" placeholder="Example@company.com" onChange={handleChange} />

                        </div>
                        <div className="btn-container" onClick={showPasswordPage}>
                            <button className="btn-next">
                                <div className="btn-text">Next</div>
                                <span></span>
                            </button>
                        </div>
                        <div className="separator">
                            <span className="line"></span>
                            <h2>Or</h2>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="password-page" style={{ display: passwordPageVisibility }}>
                        <div className="username-input-wrapper">
                            <span>username</span>
                            <div className="input-wrapper">
                                <input type="text" name="username" onChange={handleChange} />

                            </div>
                            {/* <label htmlFor="username">Username</label> */}
                        </div>
                        <div className="password-input-wrapper">

                            <span>password</span>
                            <div className="input-wrapper">
                                <input type="text" name="password" onChange={handleChange} />

                            </div>
                            {/* <label htmlFor="password">Password</label> */}
                        </div>
                        <div className="button-container">
                            <div className="button-wrapper">

                                <button className="btn-login" onClick={doLogin}>Log in</button>
                            </div>
                        </div>

                    </div>
                    {/* <button>Next →</button> */}
                    <div className="signup">
                        <span className="signup-question">Don't have an account yet?</span>
                        <Link to="/signup" >
                            <button>
                                Signup
                            </button>
                        </Link>
                        {/* <p>

                            <Link to="/signup" >Sign up</Link>
                        </p> */}
                    </div>
                    <div className="back-separator-container">
                        <span className="separator-line" ></span>
                    </div>
                    <div className="other-account-wrapper" style={{ display: passwordPageVisibility }} onClick={showEmailPage}>
                        <div className="other-account-container">
                            <button className="other-account">Login to another account</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
