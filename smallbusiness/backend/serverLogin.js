/*const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'smallbusiness'
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM profile WHERE `email` LIKE ? AND `password` LIKE ?";   
    
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err) return res.json("Error");
        if(data.length > 0) {
            return res.json("Good")
        }else{
            return res.json("Bad")
        }
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})*/