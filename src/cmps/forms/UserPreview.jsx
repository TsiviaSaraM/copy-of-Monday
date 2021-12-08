import React from 'react'
import avatar from './../../assets/img/avtar1.png'

export function UserPreview({ user }) {
    return (
        <div className="user-preview">
            <div className="user-preview-inner flex">
                {/* <Image source={require('./my-icon.png')} /> */}
                <div className="avatar flex">
                    <img src={avatar} alt="" />
                </div>
                <div className="name">{user.fullname}</div>
            </div>
        </div>
    )
}
