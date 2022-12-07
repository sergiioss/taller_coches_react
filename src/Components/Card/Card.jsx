import React from 'react'
import './Card.css'
import {Container, Col, Row} from 'react-bootstrap'


const Card = (props) => {
    return (
        <Container className="cardCont">
            {/* ************** <-- Header --> ************* */}

            <Row>
                <Col className="logEme"><img className="logEm" src="https://cdn.niviweb.com/images/coches/logo-taller-1.png"/></Col>
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
            <Col></Col>
            {/* ************** <-- Body --> ************* */}

            <Col>
                <Col>
                    <Col className="descri">Descripción General de la Averia</Col>
                    <Col className="descri content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis et eligendi saepe voluptas. Error pariatur temporibus reprehenderit dolorum tenetur perferendis nam optio fuga voluptatum quaerat, nulla modi! Unde, at?</Col>
                    <Row>
                        <Col className="descri content">MODELO</Col>
                        <Col>{props.data.model}</Col>
                    </Row>
                    <Row>
                        <Col className="content">MARCA</Col>
                        <Col>{props.data.brand}</Col>
                    </Row>
                    <Row>
                        <Col className="content">COMPAÑIA DE SEGUROS</Col>
                        <Col>{props.data.insurance_company}</Col>
                    </Row>
                    <Row>
                        <Col className="content">FECHA DE ENTRADA</Col>
                        <Col>{props.data.entry_date}</Col>
                    </Row>
                    <Row>
                        <Col className="content">PRECIO</Col>
                        <Col>{props.data.price + " €"}</Col>
                    </Row>
                    <Row>
                        <Col className="content">FECHA MATRICULACION</Col>
                        <Col>{props.data.registration_year}</Col>
                    </Row>
                </Col>
                {/* <Row>{props.data.image.data}</Row> */}
            </Col>
            {/* ************** <-- Footer  TECHNICAL & SUPPORT--> ************* */}
            <Col></Col>
            <Col>
                <Col>AVERIA</Col>
                <Col>{props.data.fault_description}</Col>
            </Col>
            <Col></Col>
            <Col>
                <Col>MANTENIMIENTO</Col>
                <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animi voluptatum optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animi voluptatum optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas</Col>
            </Col>
        </Container>
    )
}

export default Card