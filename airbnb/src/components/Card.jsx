import React from 'react'

const Card = () => {
  return (
    <div className="card">
       <img className='card-profile-img' src={require('./../images/KatieZaferes.png')} alt="" />
       <span className='card-rating'><img className='card-star' src={require('./../images/Star.png')} alt="" />5.0 (6) - USA</span>
        <p className='card-title'>Life lessons with Katie Zaferes</p>
        <p className='card-price'><b>From $136</b>/ person</p>
    </div>
  )
}

export default Card
