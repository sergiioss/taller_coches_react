import React from 'react'
import './Repairs.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Card from '../../Components/Card/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Row, Container } from 'react-bootstrap';


const Repairs = (props) => {

    const [repairs, setRepairs] = useState({
        repair: [],
        rep: "",
        search: ""

    });

    useEffect(() => {
        axios.get('https://tallercochesmongoose-production.up.railway.app/api/repairs')
            .then(resp => {
                setRepairs({
                    repair: resp.data.repairs
                })
            })
    }, [])

    const start = (event) => {
        setRepairs({
            ...repairs,
            [event.target.name]: event.target.value
        })
    }

    const finishEnter = (event) => {
        if (event.key === "Enter") {
            console.log(repairs.search)
            setTimeout(() => {
                event.target.value = ""
            }, 20)
        }
    }
    const finishClick = (event) => {
        console.log(repairs.search)
        setTimeout(() => {
            event.target.value = ""
        }, 20)
    }

    return (
        <Container className="repairs">
            <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="backImg"><NavLink className="back" to="/"><img className="arrow" src="https://cdn-icons-png.flaticon.com/512/1174/1174407.png"></img>Atras</NavLink>
            </Row>
            <Row xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
                <InputGroup className="mb-5" onChange={start}>
                    <Form.Control
                        placeholder="Buscar reparación"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        className="input-form"
                        type="text"
                        name="busqueda"
                        onKeyUp={finishEnter}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={finishClick}>
                        <img className="arrow" src="https://cdn-icons-png.flaticon.com/512/51/51658.png" />
                    </Button>
                </InputGroup>
            </Row>
            <div className="rep">
                {
                    repairs.repair.map((rep, i) =>
                        <Card className="rep" data={rep} key={i} />
                    )
                }
            </div>
        </Container>
    )

}

export default Repairs