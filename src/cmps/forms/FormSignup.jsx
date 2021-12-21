import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, saveUser } from '../../store/actions/userActions'

export const FormSignup = () => {

    const [newUser, setNewUser] = useState(null)
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === "number" ? +target.value : target.value
        setNewUser({ ...newUser, [field]: value })
    }

    const addUser = async ({history}) => {
        console.log('newUser', newUser);
        const { fullname, username, password, email, policy } = newUser
        if (!fullname || !username || !password || !email || !policy) {
            alert('please enter full login details')
            return
        }
        try {
            await dispatch(saveUser(newUser))
            await dispatch(login({ username, password }))
            history.push('/boards')
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="form-signup">

            <form action="">
                <div className="page1 flex-col">
                    <div className="titles flex-col">
                        <h2>Welcome to monday.com</h2>
                        <p>Let’s get started with a few simple steps</p>

                    </div>
                    <label htmlFor="email">Enter email</label>
                    <input type="text" name="email" id="email" placeholder="name@company.com" onChange={handleChange} />
                    <button>Continue</button>

                </div>

                <div className="page2">
                    <h2>Set up your account</h2>
                    <p>Fill in your profile details</p>
                    <label htmlFor="fullname">Full name</label>
                    <input type="text" name="fullname" id="fullname" onChange={handleChange} />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" onChange={handleChange} />

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={handleChange} />

                    <label htmlFor="policy">I aggree to the Terms of Service and Privacy Policy</label>
                    <input type="checkbox" name="policy" id="policy" onChange={handleChange} />

                    <button onClick={addUser} >Signup</button>

                </div>

            </form>

            <div className="login">
                <p>Already have an account?</p>
                <Link to="/login" >Log in</Link>
            </div>

        </div>
    )
}
