import React, { useState, useEffect } from 'react'
import { addUser, editUser } from '../actions'
import { useDispatch } from 'react-redux'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      background: "#f9f9f9",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.4)",
      zIndex: 999,
      width: "100vw",
    },
  };

function AddUser({ user }) {
    const [modalIsOpen, setModalIsopen] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const addOneUser = useDispatch()

    useEffect(() => {
        if (user) {

            setForm({
                name: user.name,
                email: user.email,
                phone: user.phone,
            })
        }


    }, [user])


    const handleSubmit = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const newUser = (e) => {
        e.preventDefault()
        if (user) {
            addOneUser(editUser(user._id, form))
        } else {
            addOneUser(addUser(form))
        }
    }


    return (
        <>
            <button onClick={() => setModalIsopen(!modalIsOpen)}>+</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsopen(false)}
                style={customStyles}
            >
                <form onSubmit={(e) => newUser(e)}>
                    <label>name:</label>
                    <br />
                    <input name="name" type='text' required onChange={handleSubmit} value={form.name} />
                    <br />
                   
                    <label>email:</label>
                    <br />
                    <input name="email" type='email' required onChange={handleSubmit} value={form.email} />
                    <br />
                   
                    <label>phone:</label>
                    <br/>
                    <input name="phone" type='number' onChange={handleSubmit} value={form.phone} />
                    <br />
                    
                    <button type='submit' onClick={(e) => { newUser(e); setModalIsopen(false) }}>add</button>
                </form>
            </Modal>
        </>
    )

}


export default AddUser