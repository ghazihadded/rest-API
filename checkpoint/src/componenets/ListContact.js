import React, { useState,useEffect } from 'react';
import axios from 'axios'

function ListContact() {
    const [contact, setContact] = useState([])


    useEffect(() => {
        const getList = () => {
            axios.get("http://localhost:4000/user")
                .then(user => setContact(user.data))
                .catch(err => console.log(err))
        }
        getList()
     
    }, [])
console.log(contact)
    return (
        <div>
            {contact.map(user => (

               <h2>{user.name}</h2>
      )
            )}
        </div>
    )
}




export default ListContact