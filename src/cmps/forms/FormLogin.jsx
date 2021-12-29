import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/userActions'
import Logo from "./../../assets/img/logo-full.png"

export const FormLogin = () => {
    const [userCred, setUserCred] = useState(null)
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        setUserCred({ ...userCred, [field]: value })
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
                    <div className="email-page">
                        <div className="email-input-wrapper">
                            <label htmlFor="email">Enter your work email address</label>
                            <input type="email" name="email" placeholder="Example@company.com" />

                        </div>
                        <div className="btn-container">
                            <button className="btn-next">
                                <div className="btn-text">Next</div>
                                <span></span>
                            </button>
                        </div>
                    </div>

                    <div className="separator">
                        <span className="line"></span>
                        <h2>Or</h2>
                        <span className="line"></span>
                    </div>

                    <div className="password-page">
                        <div className="uername-input-wrapper">

                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" onChange={handleChange} />
                        </div>
                        <div className="password-input-wrapper">


                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" onChange={handleChange} />
                        </div>

                    </div>
                    {/* <button>Next →</button> */}
                    <button onClick={doLogin}>login</button>


                    <div className="signup">
                        <span className="signup-question">Don't have an account yet?</span>
                        <button>Signup</button>
                        {/* <p>

                            <Link to="/signup" >Sign up</Link>
                        </p> */}
                    </div>
                </div>

            </div>

        </div>
    )
}
