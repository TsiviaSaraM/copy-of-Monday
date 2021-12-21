import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/userActions'

export const FormLogin = () => {
    const [userCred, setUserCred] = useState(null)
    const dispatch = useDispatch()

    const handleChange = ({target}) => {
        const field = target.name
        const value = target.value
        setUserCred({...userCred, [field]: value})
    }

    const doLogin = () => {
        dispatch(login(userCred))
        
    }

    return (
        <div className="form-login" >
            <h1>Log in to your account</h1>
            <div className="login">
                {/* <label htmlFor="email">Enter your work email address</label>
                <input type="email" name="email" placeholder="example@company.com" /> */}
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" onChange={handleChange} />
                {/* <button>Next →</button> */}
                <button onClick={doLogin}>login</button>

            </div>

            <div className="signup">
                <p>Don't have an account yet?
                    <Link to="/signup" >Sign up</Link>
                </p>
            </div>

        </div>
    )
}
