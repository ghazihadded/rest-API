const mongoose= require("mongoose")

const config = require("config")
 
const connect=()=>{

    mongoose.connect(config.get("mongoURI"),{ useUnifiedTopology: true , useNewUrlParser: true })
    .then(()=>console.log("connect in db"))
    .catch(err=>console.log(err))
}
    
 


module.exports= connect 