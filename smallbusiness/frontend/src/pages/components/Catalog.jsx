import { useEffect, useState } from "react"
import { Card, Image, Row, Col, Modal, ModalBody, Form } from 'react-bootstrap'
import axios from "axios"

globalThis.namen = 0

function Catalog() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/product')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => console.log(err))
    }, [])

    const [show, setShow] = useState(false)

    const handleShow = (name) => {
        window.namen = name
        console.log(name)
        setShow(true);
    }
    const handleClose = () => setShow(false)

    const [value, setValue] = useState({
        email: '',
        number: ''
    })

    const handleInput = (event) => {
        setValue(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const [profile_id, setProfile_id] = useState()

    const handleSubmit = (event) => {
        event.preventDefault();
        var profile_email = value.email
        var number = value.number
        console.log(profile_email)
        axios.get('http://localhost:8081/profile', {
            params: {
                email: profile_email
            }
        })
            .then(res => setProfile_id(res.data[0].id))
            .catch(err => console.log(err))

        //console.log(typeof profile_id)
        console.log(profile_id)

        let product_id = window.namen
        console.log(window.namen)
        console.log(product_id)

        axios.post('http://localhost:8081/cart', { profile_id, product_id, number })
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <>
            <div className="cardholder">
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col key={idx}>
                            {data.map((d, i,) => (
                                <>
                                    <Card key={i} className="bg-transparent text-white">
                                        <Image src={d.link} class="card-img-top cardimage" alt="..." />
                                        <h5 className="card-title">{d.name}</h5>
                                        <div className="mb-1"></div>
                                        <h6 className="card-title">{d.amount_awailable} items left</h6>
                                        <div></div>
                                        <h5 className="card-title">{d.price} rub</h5>
                                        <button onClick={() => handleShow(d.product_id)} className="btn btn-card text-black" name={d.product_id}> Добавить в корзину </button>
                                    </Card>
                                </>
                            ))}
                        </Col>
                    ))}
                </Row>
            </div>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>If you want to add item {window.namen} to YOUR cart, enter your ACCOUNT email</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <input type="email" placeholder="Enter Email" className="form-control" name='email'
                                onChange={handleInput} />
                        </Form.Group>
                        <Form.Group controlId="formBasicNumber">
                            <Form.Label>Number</Form.Label>
                            <input type="number" placeholder="0" name='number'
                                onChange={handleInput} />
                        </Form.Group>
                        <button type="submit">Submit</button>
                    </Form>
                </ModalBody>

            </Modal>
        </>

    )
}

export default Catalog