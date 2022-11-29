import React from 'react';
import './Header.css';
import img2 from '../../Assets/phone.png';
import img3 from '../../Assets/facebook2.png';


const Header = () => {

    return (
        <div className="header">
            <div className="intr">Talleres mecánicos por todo el mundo</div>
            <div className="phone"><img className="cont" src={img2}></img>963283620</div>
            <div className="phone"><img className="cont" src={img3}></img><a className="facebook" target="blank" href="https://es-es.facebook.com/">Facebook</a></div>
        </div>
    )

}

export default Header