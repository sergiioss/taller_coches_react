import React from 'react'
import './Repairs.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Repairs = () => {
    const [repairs, setRepairs] = useState({
        repair:[]
    });
    
    useEffect(()=>{
        axios.get('https://tallercochesmongoose-production.up.railway.app/api/repairs')
        .then(resp=>{
            setRepairs({
                repair: resp.data.repairs
            })
        })
    },[])
    console.log(repairs.repair)

    return (
        <div className="repairs">
            <div><NavLink className="back" to="/"><img className="arrow" src="https://cdn-icons-png.flaticon.com/512/1174/1174407.png"></img>Atras</NavLink>
            </div>
            {/* icono cargando */}
            {/* https://cdn-icons-png.flaticon.com/512/3305/3305803.png */}

            <div>
            {
                repairs.repair.map((rep, i) => (
                    <div key={i} data={rep}></div>
                ))
            }
            </div>
        </div>
    )

}

export default Repairs