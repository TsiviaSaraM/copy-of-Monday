import React from 'react'
import { FormLogin } from '../cmps/forms/FormLogin'
import { useDispatch, useSelector } from 'react-redux'

export function HomePage() {

    const dispatch = useDispatch()
    // const loggedInUser = useSelector(state => state.loggedInUser)
    const { loggedInUser} = useSelector(state => state.userModule)

    
    if (!loggedInUser) return (<FormLogin />)
    
    return (
        <div>
            <h1>Home page</h1>
            <p>Hi {loggedInUser.fullname} </p>

        </div>
    )
}
