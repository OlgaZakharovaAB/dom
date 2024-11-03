import { useEffect, useState } from "react"
import {Button, Card, Image, Row, Col} from 'react-bootstrap'

function Catalog(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/product')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [])
    return(
        <>
        
        <div className="cardholder">
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                    {data.map((d, i) =>(
                        <>
                            <Card key = {i} className="bg-transparent text-white"> 
                                <Image src={d.link} class="card-img-top cardimage" alt="..."/>
                                <h5 className="card-title">{d.name}</h5>
                                <div className="mb-1"></div>
                                <h6 className="card-title">{d.amount_awailable} items left</h6>
                                <div></div>
                                <h5 className="card-title">{d.price} rub</h5>
                                <Button href="/" className="btn btn-card"></Button>
                            </Card> 
                        </>
                           
                    ))}
                </Col>  
            ))}
        </Row>
        </div>
        </>

    )
}

export default Catalog