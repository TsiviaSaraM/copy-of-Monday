import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from './../hooks/useForm'
//eslint-disable-next-line
import { getUserById, loadUsers, updateUser, removeUser, saveUser, signup } from './../store/actions/userActions'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { utilService } from '../services/utilService'
import { getEmptyUser } from '../services/userService'
import { UserList } from '../cmps/forms/UserList'

export const UserPage = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.userModule)
    const [newUser, handleChange, setNewUser] = useForm(null)

    useEffect(async () => {
        await (dispatch(loadUsers()))
        console.log(users);
        //eslint-disable-next-line
    }, [])

    //for creating add user form
    useEffect(() => {
        // Use effect cannot return promise, so we use an IIFE
        const loadUser = async () => {
            try {
                const user = getEmptyUser()
                setNewUser(user)
            } catch (err) {
                console.log(err);
            }
        }
        loadUser()
    }, [])

    const editUser = (userToEdit) => {
        const newName = utilService.makeName()
        userToEdit.fullname = newName
        console.log('userToEdit in UserPage before edit', userToEdit);
        dispatch(updateUser(userToEdit))
    }

    const deleteUser = (userId) => {
        dispatch(removeUser(userId))
    }

    const createUser = async () => {
        newUser.username = 'new' + Math.floor(Math.random() * 10)
        newUser.password = 'pw' + Math.floor(Math.random() * 10)
        newUser.email = 'new' + Math.floor(Math.random() * 10) + '@gmail.com'
        dispatch(signup(newUser))
    }

    if (!users) return <div className="page-loading">loading users</div>
    if (!users.length) return <div className="no-data">no users</div>
    return (
        <div className='users-page'>
            <h1>Users Page</h1>
            <p>{users.length} users</p>
            {users.map(user => {
                return (<p key={user._id}>{user._id}, {user.fullname}, {user.username} hi
                    <button onClick={() => editUser(user)} >edit</button>
                    <button onClick={() => deleteUser(user._id)} > delete</button>
                </p>)
            })}


            <input type="text" onChange={handleChange} name="fullname" value={newUser.fullname} />
            <button onClick={createUser} >create new user</button>
            <UserList />
        </div >
    )
}
