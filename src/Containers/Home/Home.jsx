import React from 'react'
import './Home.css'
import { NavLink } from "react-router-dom"

const Home = () => {
    
    return (
        <div className="home">
            <div>
                <div className="sidebar">
                    <div><NavLink className="links one" to="/repairs">Reparaciones</NavLink></div>
                    <div><NavLink className="links one" to="/admin">Admin</NavLink></div>

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