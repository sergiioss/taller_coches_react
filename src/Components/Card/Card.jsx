import React from 'react'
import './Card.css'
import { Container, Col, Row } from 'react-bootstrap'

const Card = (props) => {
    return (
        <Container className="cardCont">

            {/* **************************************** <-- Header --> *************************************** */}

            <Row>
                <Col className="logEme"><img className="logEm" src="https://cdn.niviweb.com/images/coches/logo-taller-1.png" /></Col>
                <Col>
                    <Row className="repT">REPARACION Nº</Row>
                    <Row className="repC">{props.data.repair_number}</Row>
                </Col>
                <Col>
                    <Row className="htitle">NOMBRE</Row>
                    <Row className="htitle">CALLE</Row>
                    <Row className="htitle">DNI</Row>
                    <Row className="htitle">EMAIL</Row>
                </Col>
                <Col>
                    <Row className="htitleC">{props.data.name_and_surname}</Row>
                    <Row className="htitleC">{props.data.address}</Row>
                    <Row className="htitleC">{props.data.clientDni}</Row>
                    <Row className="htitleC">{props.data.clientEmail}</Row>
                </Col>
            </Row>
            <Row className="titlDesc">Descripción general de la avería por el cliente</Row>
            <Row className="contDesc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis et eligendi saepe voluptas. Error pariatur temporibus reprehenderit dolorum tenetur perferendis nam optio fuga voluptatum quaerat, nulla modi! Unde, at?</Row>

            {/* **************************************** <-- Body --> *************************************** */}

            <Row className="Conts">
                <Col className="ContsCo">
                    <Row>
                        <Col className="longModel">MODELO</Col>
                        <Col className="shortModel">{props.data.model}</Col>
                    </Row>
                    <Row>
                        <Col className="longModel">MARCA</Col>
                        <Col className="shortModel">{props.data.brand}</Col>
                    </Row>
                    <Row>
                        <Col className="longModel">COMPAÑIA DE SEGUROS</Col>
                        <Col className="shortModel">{props.data.insurance_company}</Col>
                    </Row>
                    <Row>
                        <Col className="longModel">FECHA DE ENTRADA</Col>
                        <Col className="shortModel">{props.data.entry_date}</Col>
                    </Row>
                    <Row>
                        <Col className="longModel">PRECIO</Col>
                        <Col className="shortModel">{props.data.price + " €"}</Col>
                    </Row>
                    <Row>
                        <Col className="longModel">FECHA DE MATRICULACION</Col>
                        <Col className="shortModel">{props.data.registration_year}</Col>
                    </Row>
                </Col>
                <Col className="imgA">
                    {props.data.image.type}
                </Col>
            </Row>

            {/* **************************************** <-- Footer --> *************************************** */}

            <Row className="titlDesc">AVERIA</Row>
            <Row className="contDesc">
                {"- " + props.data.fault_description}
            </Row>
            <Row className="titlDesc">MANTENIMIENTO</Row>
            <Row className="contDesc">
                - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas,   debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta    accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animivoluptatum    optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Loremipsum dolor sit   amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremquetempora dicta quasi    aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animivoluptatum    optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Loremipsum dolor sit   amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremquetempora dicta quasi    aliquam corrupti magnam quam quas</Row>
        </Container>
    )
}

export default Card