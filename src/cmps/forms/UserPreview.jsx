import React from 'react'
import avatar from './../../assets/img/avatar1.png'

export function UserPreview({ user, addMember }) {
    const {_id, fullname, imgUrl} = user
    return (
        <div className="user-preview" onClick={()=>addMember({_id, fullname, imgUrl})}>
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
