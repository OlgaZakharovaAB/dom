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
        <Image src="./src/assets/Catalog.svg" className="cattitle"></Image>
        <div className="cardholder">
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                    {data.map((d, i) =>(
                        <>
                            <Card key = {i}> 
                                <Image src={d.link} class="card-img-top cardimage" alt="..."/>
                                <h5 className="card-title">{d.name}</h5>
                                <h6 className="card-title">{d.amount_awailable} items left</h6>
                                <h5 className="card-title">{d.price} rub</h5>
                                <Button href="/"></Button>
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