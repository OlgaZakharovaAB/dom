import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
/*import session from 'express-session'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'*/

const app = express()
app.use(cors())
app.use(express.json())
/*app.use(cookieParser())
app.use(bodyParser.json())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 100*60*60*24,
    }
}))*/

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'smallbusiness'
})

app.get('/product', (req, res) => {
    const sql = "SELECT * FROM product";
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        else return res.json(data);
    })
})


app.get('/login', (req, res) => {
    const sql = "SELECT `id` FROM `profile` WHERE `email` LIKE ? AND `password` LIKE ?";
    console.log(req)   
    console.log(req.query.email)
    db.query(sql, [req.query.email, req.query.password], (err, data) =>{
        if (err) return res.json('err');
        return res.json(data);
        
    })
})

app.get('/profile', (req, res) => {
    const sql = "SELECT `id` FROM `profile` WHERE `email` = ?";
    //console.log(req)
    //console.log(req.query.email)
    db.query(sql, req.query.email, (err, data) => {
        if (err) return res.json('err');

        return res.json(data);

    })
})

app.post('/cart', (req, res) => {
    const sql = "INSERT INTO `cart` (profile_id, product_id, amout) VALUES (?, ?, ?)";
    console.log(req)
    db.query(sql, [req.body.profile_id, req.body.product_id, req.body.number], (err, data) => {
        if (err) return res.json(err);
        return res.json(data)
    })
})

app.get('/cartget', (req, res)=> {
    const sql = "SELECT * FROM `cart` WHERE `profile_id` = ?";
    console.log(req.query.id)
    db.query(sql, req.query.id, (err, data) => {
        if (err) return res.json(err);

        return res.json(data);

    })
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO profile (email, password, name, surname, address) VALUES (?);";
    const values = [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.surname,
        req.body.address
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json("Error");
        return res.json('Good')
    })
})

app.listen(8081, () => {
    console.log("listening");
})