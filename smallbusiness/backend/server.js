import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(cookieParser())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 100*60*60*24,
    }
}))

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'smallbusiness'
})

app.get('/product', (req, res)=>{
    const sql = "SELECT * FROM product";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err) 
            else return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM profile WHERE `email` LIKE ? AND `password` LIKE ?";   
    
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err) return res.json("Error");
        if(data.length > 0) {
            req.session.email = data[0].email;
            console.log(req.session.email)
            return res.json({Login: true});
        }else{
            return res.json({Login: false})
        }
    })
})

app.post('/signup', (req, res) =>{
    const sql = "INSERT INTO profile (email, password, name, surname, address) VALUES (?);";
    const values = [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.surname,
        req.body.address
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json('Good')
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})