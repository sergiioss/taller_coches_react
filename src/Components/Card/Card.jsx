import React from 'react'
import './Card.css'
import { Container, Col, Row } from 'react-bootstrap'

const Card = (props) => {
    return (
        <Container className="cardCont">

            {/* **************************************** <-- Header --> *************************************** */}
            <Row>
                <Col xs={8} sm={8} md={8} lg={12} xl={3} xxl={3} className="logEme"><img className="logEm" src="https://cdn.niviweb.com/images/coches/logo-taller-1.png" /></Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={3} xxl={3}>
                    <Row className="repT">REPARACION Nº</Row>
                    <Row className="repC">{props.data.repair_number}</Row>
                </Col>
                <Col xs={6} sm={6} md={6} lg={4} xl={3} xxl={3}>
                    <Row className="htitle">NOMBRE</Row>
                    <Row className="htitle">CALLE</Row>
                    <Row className="htitle">DNI</Row>
                    <Row className="htitle">EMAIL</Row>
                </Col>
                <Col xs={6} sm={6} md={6} lg={4} xl={3} xxl={3}>
                    <Row className="htitleC">{props.data.name_and_surname}</Row>
                    <Row className="htitleC">{props.data.address}</Row>
                    <Row className="htitleC">{props.data.clientDni}</Row>
                    <Row className="htitleC">{props.data.clientEmail}</Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="titlDesc">Descripción general de la avería por el cliente</Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="contDesc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis et eligendi saepe voluptas. Error pariatur temporibus reprehenderit dolorum tenetur perferendis nam optio fuga voluptatum quaerat, nulla modi! Unde, at?</Col>
            </Row>

            {/* **************************************** <-- Body --> *************************************** */}
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6}>
                        <Row>
                            <Col xs={6} sm={8} md={8} lg={8} xl={8} xxl={6} className="longModel">MODELO</Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={6} className="shortModel">{props.data.model}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={8} md={8} lg={8} xl={8} xxl={6} className="longModel">MARCA</Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={6} className="shortModel">{props.data.brand}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={8} md={8} lg={8} xl={8} xxl={6} className="longModel">COMPAÑIA DE SEGUROS</Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={6} className="shortModel">{props.data.insurance_company}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={8} md={8} lg={8} xl={8} xxl={6} className="longModel">FECHA DE ENTRADA</Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={6} className="shortModel">{props.data.entry_date}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={8} md={8} lg={8} xl={8} xxl={6} className="longModel">PRECIO</Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={6} className="shortModel">{props.data.price + " €"}</Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={8} md={8} lg={8} xl={8} xxl={6} className="longModel">FECHA DE MATRICULACION</Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} xxl={6} className="shortModel">{props.data.registration_year}</Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6} className="imgA">
                        {props.data.image.type}
                    </Col>
                </Row>
            </Col>
            {/* **************************************** <-- Footer --> *************************************** */}
            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="titlDesc">AVERIA</Row>
                <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="contDesc">
                    {"- " + props.data.fault_description}
                </Row>
                <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="titlDesc">MANTENIMIENTO</Row>
                <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="contDesc">
                    - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas,   debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta    accusantium esse!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animivoluptatum    optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Loremipsum dolor sit   amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremquetempora dicta quasi    aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animivoluptatum    optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Loremipsum dolor sit   amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremquetempora dicta quasi    aliquam corrupti magnam quam quas</Row>
            </Col>
        </Container>
    )
}

export default Card