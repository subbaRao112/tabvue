const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')


const app = express()
app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

app.post('/register',(req,res)=>{
res.send({
    message:`your user ${req.body.email} has been registered in our database Have Fun!!`
})
})

app.listen(process.env.PORT||8081)


