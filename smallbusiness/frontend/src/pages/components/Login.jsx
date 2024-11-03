import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Validation from "./Validation"

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const[errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res =>{
                if (res.data.Login) {
                    navigate('/')
                }else{
                    alert("No record existed")
                }
                console.log(res)
            }
                 )
            .catch(err => console.log(err))
        }
        
    }
  return (
    <div className="d-flex justify-content-center align-items-center ">
        <div className="p-3 text-white w-25 mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control" name="email"
                    onChange={handleInput}/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control" name="password"
                    onChange={handleInput}/>
                    {errors.password && <span className="text-danger">{errors.email}</span>}
                </div>
                <button type='submit' className="btn btn-success">Log In</button>
                <h6>Don`t have an account? Sign up</h6>
                <Link to='/signup' className="btn btn-default border text-white">Sign Up</Link>
            </form>
        </div>
    </div>
  )
}

export default Login