import React from 'react'
import './card.css'

const Card = ({kund}) => {
    return (
        <>
            <div className="card-container">
                <div className="id-container"><p><small>{kund.id}</small></p></div>
                <p>{kund.firstName} {kund.lastName}</p>
                <p>{kund.email}</p>
            </div>
        </>
    )
}

export default Card
