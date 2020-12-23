import React,{useEffect} from 'react'
import {getUser} from'../../actions'
import {useSelector,useDispatch} from 'react-redux'
import UserCard from '../userCard'
import AddUser from '../AddUser'

import './style.css' 


function UserList(){
   
    const{users,isLoading}=useSelector(state=>state);
    const GetAllUsers=useDispatch()

    useEffect(() => {
          
        GetAllUsers(getUser())
      
       
    }, [])

    if(isLoading){
      return (
          <h1>is loading......</h1>
      )
    }
    return (
        <div className='user-list'>{users.map(user=><UserCard key={user._id} user={user} />)}
        <div> <AddUser /></div>
        </div>
    )

}


export default UserList