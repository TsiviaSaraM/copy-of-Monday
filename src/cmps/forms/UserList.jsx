import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUsers } from './../../store/actions/userActions'
import { useSelector } from 'react-redux'
import { UserPreview } from './UserPreview'

export function UserList({toggleUserListOpen, addMember, styles}) {
    const { users } = useSelector(state => state.userModule)
    const dispatch = useDispatch()

    useEffect(() => {
        // Use effect cannot return promise, so we use an IIFE
        const loadUsersToApp = async () => {
            try {
                await dispatch(loadUsers())
                console.log(users);
            } catch (error) {
                console.log(error);
            }
        }
        loadUsersToApp()
    }, [])


    if (!users) return <div className="page-loading">loading users</div>
    if (!users.length) return <div className="no-data">no users</div>
    return (
        <div className="user-list" style={styles}>
            <input className="user-search" type="text" placeholder="Enter name" />
            <div className="title-container">
                <span className="title">People</span>
            </div>
            {users.map(user => {
                
                return (
                    <UserPreview user={user} key={user._id} addMember={addMember} />
                )
            })}

        </div>
    )
}
