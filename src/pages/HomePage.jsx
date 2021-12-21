import React from 'react'
import { FormLogin } from '../cmps/forms/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react' //NB this should be deleted for production

export function HomePage() {
    
    const { loggedInUser} = useSelector(state => state.userModule)
    useEffect(() => {
        console.log(loggedInUser);
        
    }, [loggedInUser])

    const dispatch = useDispatch()
    // const loggedInUser = useSelector(state => state.loggedInUser)


    if (!loggedInUser) return (<FormLogin />)
    
    return (
        <div className="home-page" >
            <h1>Home page</h1>
            <p>Welcome {loggedInUser.fullname} </p>

        </div>
    )
}
