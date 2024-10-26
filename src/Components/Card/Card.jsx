import React from 'react'

const Card = ({img,ClassName }) => {
  return (
    <div className={`size-44 hover:scale-100 transition-transform duration-500  rounded-3xl overflow-hidden ${ClassName}`}>
    <img src={img} className="size-full object-cover transition-transform duration-700 hover:scale-110" />
  </div>
  
  )
}

export default Card