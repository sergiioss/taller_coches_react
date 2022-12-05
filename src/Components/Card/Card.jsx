import React from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import './Card.css'


const Card = (props) => {
    return (
        <div className="card">
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
            <div className="bod"></div>
            <div className="separation"></div>
            <div className="tec"></div>
            <div className="separation"></div>
            <div className="support"></div>
        </div>
    )
}

export default Card