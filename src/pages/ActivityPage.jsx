import React, { Component } from 'react'
import {UserList} from '../cmps/forms/UserList'

export class ActivityPage extends Component {
    render() {
        return (
            <div>
                user activity page here
                <UserList />
            </div>
        )
    }
}
