const mongoose=require('mongoose')


const contactSchema= new mongoose.Schema({

    name:{
        type:String 
    },
    phone: {
        
        type:Number 
    },
    email:{
        type:String
    }
})


module.exports=mongoose.model('contacts',contactSchema)