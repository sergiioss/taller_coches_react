import React from 'react'
import './Card.css'
import { Container, Col, Row } from 'react-bootstrap'

const Card = (props) => {
    return (
        <Container className="cardCont">

            {/* **************************************** <-- Header --> *************************************** */}

            <Row xs={3} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Col xs={8} sm={8} md={8} lg={12} xl={12} xxl={12} className="logEme"><img className="logEm" src="https://cdn.niviweb.com/images/coches/logo-taller-1.png" /></Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={12} xxl={4}>
                    <Row className="repT">REPARACION Nº</Row>
                    <Row className="repC">{props.data.repair_number}</Row>
                </Col>
                <Col xs={6} sm={6} md={6} lg={4} xl={12} xxl={4}>
                    <Row className="htitle">NOMBRE</Row>
                    <Row className="htitle">CALLE</Row>
                    <Row className="htitle">DNI</Row>
                    <Row className="htitle">EMAIL</Row>
                </Col>
                <Col xs={6} sm={6} md={6} lg={4} xl={12} xxl={4}>
                    <Row className="htitleC">{props.data.name_and_surname}</Row>
                    <Row className="htitleC">{props.data.address}</Row>
                    <Row className="htitleC">{props.data.clientDni}</Row>
                    <Row className="htitleC">{props.data.clientEmail}</Row>
                </Col>
            </Row>
            <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="titlDesc">Descripción general de la avería por el cliente</Row>
            <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="contDesc">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis et eligendi saepe voluptas. Error pariatur temporibus reprehenderit dolorum tenetur perferendis nam optio fuga voluptatum quaerat, nulla modi! Unde, at?</Row>

            {/* **************************************** <-- Body --> *************************************** */}

            <Row>
                {/* <Col xs={6} sm={6} lg={6} xl={6} xxl={12}>
                    <Row>
                        <Row xs={4} sm={8} md={8} lg={8} xl={8} xxl={12} className="longModel">MODELO</Row>
                        <Row xs={8} sm={4} md={4} lg={4} xl={4} xxl={12} className="shortModel">{props.data.model}</Row>
                    </Row>
                    <Row>
                        <Row xs={10} sm={8} md={8} lg={8} xl={8} xxl={12} className="longModel">MARCA</Row>
                        <Row xs={2} sm={4} md={4} lg={4} xl={4} xxl={12} className="shortModel">{props.data.brand}</Row>
                    </Row>
                    <Row>
                        <Row xs={10} sm={8} md={8} lg={8} xl={8} xxl={12} className="longModel">COMPAÑIA DE SEGUROS</Row>
                        <Row xs={2} sm={4} md={4} lg={4} xl={4} xxl={12} className="shortModel">{props.data.insurance_company}</Row>
                    </Row>
                    <Row>
                        <Row xs={10} sm={8} md={8} lg={8} xl={8} xxl={12} className="longModel">FECHA DE ENTRADA</Row>
                        <Row xs={2} sm={4} md={4} lg={4} xl={4} xxl={12} className="shortModel">{props.data.entry_date}</Row>
                    </Row>
                    <Row>
                        <Row xs={10} sm={8} md={8} lg={8} xl={8} xxl={12} className="longModel">PRECIO</Row>
                        <Row xs={2} sm={4} md={4} lg={4} xl={4} xxl={12} className="shortModel">{props.data.price + " €"}</Row>
                    </Row>
                    <Row>
                        <Row xs={4} sm={8} md={8} lg={8} xl={8} xxl={12} className="longModel">FECHA DE MATRICULACION</Row>
                        <Row xs={4} sm={4} md={4} lg={4} xl={4} xxl={12} className="shortModel">{props.data.registration_year}</Row>
                    </Row>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={12} className="imgA">
                        {props.data.image.type}
                </Col> */}
            </Row>

            {/* **************************************** <-- Footer --> *************************************** */}
            <Col xs={12} sm={6} md={12} lg={12} xl={12} xxl={12}>
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