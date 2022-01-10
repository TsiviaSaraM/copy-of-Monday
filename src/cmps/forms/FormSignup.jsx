import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import RightImg from '../../assets/img/signup-right.png'
//eslint-disable-next-line
import { login, saveUser, signup } from '../../store/actions/userActions'

export const FormSignup = () => {

    const [newUser, setNewUser] = useState(null)
    const [pageNo, setPageNo] = useState(1)
    const [policyChecked, setpolicyChecked] = useState('unchecked') //this is changed to 'checked' when the box is checked
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === "number" ? +target.value : target.value
        if (field === "policy") togglePolicyChecked()
        setNewUser({ ...newUser, [field]: value })
    }

    const togglePolicyChecked = () => {
        const newPolicyCheckedVal = policyChecked === 'checked' ? 'unchecked' : 'checked'
        setpolicyChecked(newPolicyCheckedVal)
    }

    const handleContinue = () => {
        if (!newUser.email) alert('please enter a valid email address')
        else setPageNo(2)

    }

    const addUser = async ({ history }) => {
        console.log('newUser', newUser);
        const { fullname, username, password, email, policy } = newUser
        if (!fullname || !username || !password || !email || !policy) { //NB no 100% need to check email here because already checked on page1
            alert('please enter full login details & aggree to the privacy policy')
            return
        }
        try {
            await dispatch(signup(newUser))
            await dispatch(login({ username, password }))
            // 
            // history.push('/boards')
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="form-signup">
            <div className="screen"></div>
            <div className="form-wrapper">
                {pageNo === 1 && <div className="page1 flex-col">
                    <div className="content">

                        {/* <form action=""> */}
                        <div className="titles flex-col">
                            <div className="welcome">Welcome to monday.com</div>
                            <h2 className="get-started">Let’s get started with a few simple steps</h2>

                        </div>
                        <div className="email">
                            <div className="email-input-container">

                                <label htmlFor="email">Enter email</label>
                                <div className="input-wrapper">

                                    <input type="email" name="email" id="email" placeholder="name@company.com" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="btn-container">
                                <button className="btn-continue" onClick={handleContinue}>Continue</button>

                            </div>

                        </div>

                        <div className="login-wrapper">
                            <div className="login">
                                Already have an account?
                                <Link className="link-login" to="/login" >Log in</Link>
                            </div>

                        </div>
                    </div>
                </div>}


                {pageNo === 2 && <div className="page2">
                    <div className="titles">
                        <h2 className="txt-setup">Set up your account</h2>
                        <h3 className="txt-fillin">Fill in your profile details</h3>

                    </div>

                    <div className="content">
                        <div className="input-wrappers">
                            <div className="fullname-wrapper input-wrapper">
                                <label htmlFor="fullname">Full name</label>
                                <div className="input-wrapper">
                                    <input type="text" name="fullname" id="fullname" onChange={handleChange} />

                                </div>

                            </div>

                            <div className="password-wrapper input-wrapper">
                                <label htmlFor="password">Password</label>
                                <div className="input-wrapper">
                                    <input type="password" name="password" id="password" onChange={handleChange} />

                                </div>

                            </div>

                            <div className="username-wrapper input-wrapper">

                                <label htmlFor="username">Username</label>
                                <div className="input-wrapper">
                                    <input type="text" name="username" id="username" onChange={handleChange} />

                                </div>
                            </div>
                            <div className="checkbox-wrapper">
                                <div className="checkbox-container">
                                    <span></span>
                                    <label htmlFor="policy" className={policyChecked}>
                                        <input type="checkbox" name="policy" id="policy" onClick={togglePolicyChecked} onChange={handleChange} tabIndex="0" aria-label="I agree to the Terms of Service and Privacy Policy" />
                                        I agree to the Terms of Service and Privacy Policy
                                        <div className="box" ></div>
                                    </label>

                                </div>

                            </div>

                        </div>

                        {/* <label htmlFor="email">email</label>
                        <input type="text" name="email" id="email" onChange={handleChange} /> */}
                        <div className="btn-container">
                            <button onClick={addUser} >Signup</button>

                        </div>


                    </div>

                </div>}

                {/* </form> */}


                <div className="right-wrapper">
                    <div className="right">
                        <div className="img-wrapper">
                            <img src={RightImg} alt="" />
                        </div>
                        <div className="right-text">
                            Join over 125,000 teams that manage their work better
                            {/* <span>125,000</span> */}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
