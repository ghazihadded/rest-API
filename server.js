const express=require ('express');
const contactDb=require("./config/contactdb")
const cors = require('cors')

const app=express()
const port =process.env.Port||4000 ;

contactDb()

app.use(express.json())
app.use(cors())

app.use("/",require('./routes/contact')) 




app.listen(port,()=>{
    console.log(`your application is on localhost:${port}`)
})