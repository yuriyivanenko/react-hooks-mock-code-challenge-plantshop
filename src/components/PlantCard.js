import React, { useState } from 'react'

function PlantCard({ plantInfo: { name, image, price } }) {
  const [inStock, setInStock] = useState(true)
  const handleChangeStock = () => setInStock(!inStock)

  return (
    <li className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className='primary' onClick={handleChangeStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleChangeStock}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard
