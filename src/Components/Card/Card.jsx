import React from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
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
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="bodIm"></div>
            </div>
            <div className="separation"></div>
            <div className="tec"></div>
            <div className="separation"></div>
            <div className="support"></div>
        </div>
    )
}

export default Card