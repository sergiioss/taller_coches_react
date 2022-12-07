import React from 'react'
import './Card.css'


const Card = (props) => {
    return (
        <div className="card">
            {/* ************** <-- Header --> ************* */}

            <div className="head">
                <div className="headF"></div>
                <div className="headS">
                    <div className="headSF"></div>
                    <div className="headSS"></div>
                </div>
                <div className="headT"></div>
                <div className="headT"></div>
            </div>
            <div className="separation"></div>
            {/* ************** <-- Body --> ************* */}

            <div className="bod">
                <div className="bodCont">
                    <div className="bodContF">Descripción General del Equipo</div>
                    <div className="bodContS">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi blanditiis et eligendi saepe voluptas. Error pariatur temporibus reprehenderit dolorum tenetur perferendis nam optio fuga voluptatum quaerat, nulla modi! Unde, at?</div>
                    <div className="bodContT">
                        <div className="title">MODELO</div>
                        <div className="description">Descripcion1</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">MARCA</div>
                        <div className="description">Descripcion2</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">SERIE</div>
                        <div className="description">Descripcion3</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">UBICACIÓN</div>
                        <div className="description">Descripcion4</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">FECHA DE COMPRA</div>
                        <div className="description">Descripcion5</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">CODIGO DE MAQUINARIA</div>
                        <div className="description">Descripcion6</div>
                    </div>
                    <div className="bodContT">
                        <div className="title">GARANTIA</div>
                        <div className="description">Descripcion7</div>
                    </div>
                </div>
                <div className="bodIm"></div>
            </div>
            {/* ************** <-- Footer  TECHNICAL & SUPPORT--> ************* */}
            <div className="separation"></div>
            <div className="tec">
                <div className="tecn">TECNICO</div>
                <div className="tecDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animi voluptatum optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas facilis, delectus molestiae soluta accusantium esse!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ea facere eos autem rerum nam sed ad animi voluptatum optio! Accusantium omnis doloremque, alias repellat iusto dolorum provident tempore consectetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ad error sed voluptas, debitis alias doloremque tempora dicta quasi aliquam corrupti magnam quam quas</div>
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