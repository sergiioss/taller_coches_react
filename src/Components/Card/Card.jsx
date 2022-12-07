import React from 'react'
import './Card.css'


const Card = (props) => {
    return (
        <div className="card">
            {/* ************** <-- Header --> ************* */}

            <div className="head">
                <div className="headF"><img className="logo" src="https://cdn.niviweb.com/images/coches/logo-taller-1.png"/></div>
                <div className="headS">
                    <div className="headSF">REPARACION Nº</div>
                    <div className="headSS">{props.data.repair_number}</div>
                </div>
                <div className="headT">
                    <div className="headTS">NOMBRE</div>
                    <div className="headTS">DNI</div>
                    <div className="headTS">EMAIL</div>
                </div>
                <div className="headT">
                    <div className="headTS">{props.data.name_and_surname}</div>
                    <div className="headTS">{props.data.clientDni}</div>
                    <div className="headTS">{props.data.clientEmail}</div>
                </div>
            </div>
            <div className="separation"></div>
            {/* ************** <-- Body --> ************* */}

            <div className="bod">
                <div className="bodCont">
                    <div className="bodContF">Descripción General del Equipo</div>
                    <div className="bodContS">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis et eligendi saepe voluptas. Error pariatur temporibus reprehenderit dolorum tenetur perferendis nam optio fuga voluptatum quaerat, nulla modi! Unde, at?</div>
                    <div className="bodContT">
                        <div className="title">MODELO</div>
                        <div className="description">{props.data.model}</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">MARCA</div>
                        <div className="description">{props.data.brand}</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">COMPAÑIA DE SEGUROS</div>
                        <div className="description">{props.data.insurance_company}</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">FECHA DE ENTRADA</div>
                        <div className="description">{props.data.entry_date}</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">PRECIO</div>
                        <div className="description">{props.data.price + " €"}</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">FECHA MATRICULACION</div>
                        <div className="description">{props.data.registration_year}</div>
                    </div>
                </div>
                <div className="bodIm">{props.data.image.data}</div>
            </div>
            {/* ************** <-- Footer  TECHNICAL & SUPPORT--> ************* */}
            <div className="separation"></div>
            <div className="tec">
                <div className="tecn">AVERIA</div>
                <div className="tecDesc">{props.data.fault_description}</div>
            </div>
            <div className="separation"></div>
            <div className="tec">
                <div className="tecn">MANTENIMIENTO</div>
                <div className="tecDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animi voluptatum optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animi voluptatum optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas</div>
            </div>
        </div>
    )
}

export default Card