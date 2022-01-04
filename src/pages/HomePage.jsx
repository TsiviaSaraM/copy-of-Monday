import React from 'react'
import { FormLogin } from '../cmps/forms/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react' //NB this should be deleted for production

export function HomePage() {

    const { loggedInUser } = useSelector(state => state.userModule)
    useEffect(() => {
        console.log(loggedInUser);

    }, [loggedInUser])

    const dispatch = useDispatch()
    // const loggedInUser = useSelector(state => state.loggedInUser)


    if (!loggedInUser) return (<FormLogin />)

    return (
        <div className="home-page" >
            <h1>Welcome!</h1>

            <div className="content-wrapper">
                <div className="content">
                    <p>Hi @{loggedInUser.fullname},</p>
                    <p>We’re so glad you’re here.</p>
                    <p>This is the very beginning of your team’s journey to <b>exceptional teamwork.</b></p>
                    <br />
                    <ol>
                        <li><b>Intuitive and robust:</b> Plan, manage and track all types of work, even for the most complex projects and workflows with ease.</li>
                        <li><b>Adjust for your exact needs:</b> It all starts with a customizable board. You can pick a ready-made template, make it your own, and choose the building blocks needed to jumpstart your work.</li>
                        <li><b>Easy onboarding, fast adoption:</b> You don’t have to be a techie to feel confident in getting started, which makes onboarding anyone in your team as simple as using their phone.</li>
                    </ol>
                    <p>I encourage you to <b>invite your teammates</b> to your first board and begin exploring all that monday.com has to offer on desktop and mobile. You’ll quickly discover that it’s fun and intuitive.</p>
                    <p>Have questions? <b>We’re here every step of the way, <span className="blue">24/7</span></b> for tutorials, webinars, best practices, and much more.</p>
                    <br />
                    <p>Roy,</p>
                    <p>CEO of monday.com</p>
                </div>
            </div>

        </div>
    )
}
