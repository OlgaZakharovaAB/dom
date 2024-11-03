import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Validation2 from "./Validation2"
import axios from "axios"

function Signup(){

    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        address: ''
    })

    const navigate = useNavigate()

    const[errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation2(values));
        if(errors.email === "" && errors.password === "" && errors.name === "" && errors.surname === "" && errors.address === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
    }
  return (
    <div className="d-flex justify-content-center align-items-center ">
        <div className="p-3 text-white w-25 mt-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control" name = 'email'
                    onChange={handleInput}/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control" name = 'password'
                    onChange={handleInput}/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="name" placeholder="Enter Name" className="form-control" name = 'name'
                    onChange={handleInput}/>
                    {errors.name && <span className="text-danger">{errors.name}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="surname">Surname</label>
                    <input type="name" placeholder="Enter Surname" className="form-control" name = 'surname'
                    onChange={handleInput}/>
                    {errors.surname && <span className="text-danger">{errors.surname}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="name" placeholder="Enter Address" className="form-control" name = 'address'
                    onChange={handleInput}/>
                    {errors.address && <span className="text-danger">{errors.address}</span>}
                </div>
                <button type='submit' className="btn btn-success">Sign up</button>
                <h6>Have an account? Log In</h6>
                <Link to='/login' className="btn btn-default border text-white">Log in</Link>
            </form>
        </div>
    </div>
  )
}
export default Signup