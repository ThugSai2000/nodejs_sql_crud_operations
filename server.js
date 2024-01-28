const express = require('express')

const app = express()
require('express-async-errors')
const db = require('./db.js')

const employeeroutes = require('./controllers/employee.controller.js')
const cors = require('cors');
const bodyparser = require('body-parser')

// Enable All CORS Requests
app.use(cors());


// Or, Enable CORS for Specific Origins
app.use(cors({
    origin: 'http://127.0.0.1:5500' // Allow requests from this origin
}));

// middlewares
app.use(bodyparser.json())
app.use('/api/employees', employeeroutes)


app.use((err,req,res,next )=>{
    console.log(err);
    res.status(err.status || 500).send("Something Went Wrong")
})


db.query("SELECT 1")
.then(() => {
              console.log("Db is connected")
              app.listen(5000,()=>console.log("Server Is running on port 5000"))
            })
.catch(error => console.log("Database connection failed :\n",error))

