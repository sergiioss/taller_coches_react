import React from 'react'
import './Repairs.css'
import { NavLink } from 'react-router-dom'


const Repairs = () => {

    return (
        <div className="repairs">
            <div><NavLink className="back" to="/"><img className="arrow" src="https://cdn-icons-png.flaticon.com/512/1174/1174407.png"></img>Atras</NavLink>
            </div>
        </div>
    )

}

export default Repairs