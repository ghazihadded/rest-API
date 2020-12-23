import axios from 'axios'

import {GET_USER,ADD_USER,Delite_USER} from './const'

export const getUser =()=>(dispatch)=>{
     
       axios.get("http://localhost:4000/user").then(user=>{
           dispatch({
               type :GET_USER,
               payload: user.data ,
           })
       })
}

export const addUser  =(newuser)=>(dispatch)=>{
     
    axios.post("http://localhost:4000/add",newuser).then(user=>{
        dispatch({
            type :ADD_USER,
            payload: user.data ,
        })
    })
}

export const deliteUser=(id)=>()=>{
    axios.delete(`http://localhost:4000/${id}`)
}

export const editUser=(id,update)=>(dispatch)=>{
    axios.put(`http://localhost:4000/${id}`,update).then(res=>{
        dispatch(getUser())
    })

}

export const removeUser =(_id)=>{
    return{
        type:Delite_USER,
        payload :_id ,
    }
}