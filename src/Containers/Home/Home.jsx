import React from 'react'
import './Home.css'

const Home = () => {

    return (
        <div className="home">
            <div>
                <div className="sidebar">
                    <div><a className="links one" href="http://www.google.com" target="blank" >Reparaciones</a></div>
                    <div className="links">Admin</div>

                </div>
            </div>
            <div className="cont">
                <div className="news">
                    BIENVENIDO A TU TALLER <br/> 
                    DE CONFIANZA!!
                </div>
            </div>
        </div>
    )
}

export default Home