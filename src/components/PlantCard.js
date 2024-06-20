import React, { useState } from 'react'

function PlantCard({ plantInfo: { id, name, image, price }, handleSubmitTrigger }) {
  const [inStock, setInStock] = useState(true)
  const handleChangeStock = () => setInStock(!inStock)

  const handleDeletePlant = async () => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      handleSubmitTrigger()
    } catch (error) {
      alert(error)
    }
  }

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
      <button style={{ margin: '5px' }} onClick={handleDeletePlant}>
        🗑️
      </button>
    </li>
  )
}

export default PlantCard
