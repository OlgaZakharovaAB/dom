import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap"

export const Footer = () => (
    <Container fluid style={{'backgroundColor':'whitesmoke', 'color':'dark', 'height':'350px'}}>
        <Container style={{'display':'flex', 'justifyContent':'center', 'padding':'10px'}}>
            <Row>
                <Col>
                    <br/>
                    <Form.Label style={{'fontWeight':'bold', 'fontSize':'larger'}}>Здесь вы можете оставить отзыв о работе сайта</Form.Label>
                    <InputGroup className="mb-3" style={{'width':'30vw'}}>
                    <InputGroup.Text id="inputGroup-sizing-default">
                    Имя
                    </InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                    </InputGroup>

                    <InputGroup style={{'width':'30vw'}}>
                    <InputGroup.Text>Отзыв</InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <br/>
                    <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Согласие на обработку персональных данных"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    />
                    </Form.Group>
                    <Button variant="primary">Отправить</Button>
                </Col>
            </Row>
        </Container>
    </Container>
)