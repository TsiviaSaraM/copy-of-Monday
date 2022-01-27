import React from 'react'
import avatar from './../../assets/img/avatar1.png'

export function UserPreview({ user, addMember }) {
    const {_id, fullname, imgUrl, mentions} = user
    return (
        <div className="user-preview" onClick={()=>addMember({id: _id, fullname, imgUrl, mentions})}>
            <div className="user-preview-inner flex">
                {/* <Image source={require('./my-icon.png')} /> */}
                <div className="avatar flex">
                    <img src={avatar} alt="" />
                </div>
                <div className="name">{user.fullname}</div>
                <div className="temp">{user._id}</div>
            </div>
        </div>
    )
}
