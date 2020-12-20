var express = require('express');
var router = express.Router();




 const listContact= require('../models/Contact')


 //http://localhost:4000/contact/add
 // add contact
 //public

 router.post("/add",(req,res)=>{
    const{name,phone,email}=req.body

    const contact = new listContact({
     name,
     phone,
     email
    })
     contact.save()
     .then(contacts=> res.send(contacts))
     .catch(err=>console.log(err))
     
 })

  //http://localhost:4000/user
 // find contact
 //public

 router.get("/user",(req,res)=>{
     listContact.find()
     .then(contact=>res.send(contact))
     .catch(err=>console.log(err))
 })

  //http://localhost:4000/id
 // update contact
 //public
  
     router.put("/:_id",(req,res)=>{
         const {_id}=req.params 
         let newContact={$set:req.body}
         listContact.findByIdAndUpdate({_id},{...newContact})
         .then(user=>res.send(user))
         .catch(err=>console.log(err))
     })  
      
     //http://localhost:4000/id
 // delete contact
 //public

     router.delete("/:_id",(req,res)=>{
        const { _id }= req.params 
        // console.log (_id)
        listContact.findOneAndDelete({_id})
        .then(user=>res.send(user))
        .catch(err=>console.log(err))
    })  


 module.exports=router