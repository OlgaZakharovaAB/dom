import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Validation from "./Validation"

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [data, setData] = useState([])

    const [n, setN] = useState()

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.get('http://localhost:8081/login', {
                params: {
                    email: values.email,
                    password: values.password
                }
            })
                .then(res => {
                    console.log(res.data[0].id);
                    setN(res.data[0].id)

                })
                .catch(err => console.log(err))
        }
        axios.get('http://localhost:8081/cartget', {
            params: {
                id: n
            }
        })
            .then(res => setData(res.data))
            .catch(err => console.log("err222"))

        //data.sort((a, b) => a.product_id > b.product_id ? 1 : -1);
        console.log(data)
    }




    return (
        <div className="back">
            <h3 className="text-white">Enter your login and password to view your cart and orders</h3>
            <div className="d-flex justify-content-center align-items-center ">

                <div className="p-3 text-white w-25 mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="Enter Email" className="form-control" name="email"
                                onChange={handleInput} />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Enter Password" className="form-control" name="password"
                                onChange={handleInput} />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                        <button type='submit' className="btn btn-success" href='/'>Log In</button>
                        <h6>Don`t have an account? Sign up</h6>
                        <Link to='/signup' className="btn btn-default border text-white">Sign Up</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login