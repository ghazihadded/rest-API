import React from 'react'
import {useDispatch} from 'react-redux'
import {deliteUser,removeUser} from '../../actions/index'
import AddUser from '../AddUser'

import './style.css'

function UserCard({ user }) {
    
    const userDelite=useDispatch();
    const userRemove=useDispatch();

    const handleClick=()=>{
        userDelite(deliteUser(user._id))
        userRemove(removeUser(user._id))
    }

    return (
        <>
            <div className="user-card">
                <div className='action-menu'>
                    <ul>
                         <button onClick={handleClick}>delete</button>
                         <AddUser user={user} id={user._id} />
                        <li>{user.name}</li>
                        <li>{user.email} </li>
                        <li>{user.phone} </li>
                    </ul>
                </div>
            </div>
           
        </>
    )
}




export default UserCard