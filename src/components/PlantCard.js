import React, { useState } from 'react'

function PlantCard({ plantInfo: { id, name, image, price }, handleSubmitTrigger }) {
  const [inStock, setInStock] = useState(true)
  const [editInput, setEditInput] = useState(false)
  const [newPrice, setNewPrice] = useState('')
  const handleChangeStock = () => setInStock(!inStock)
  const handleAddInput = () => setEditInput(!editInput)

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

  const handleUpdatePrice = async () => {
    try {
      const response = await fetch(`http://localhost:6001/plants/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: newPrice }),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      handleSubmitTrigger()
      setNewPrice('')
    } catch (error) {
      alert(error)
    }
  }

  const EditPriceInput = () => {
    return (
      <>
        <input
          type='number'
          value={newPrice}
          onChange={(e) => setNewPrice(parseFloat(e.target.value))}
          name='price'
          step='0.01'
          placeholder='New Price'
        />
        <button onClick={handleUpdatePrice}>Update Price</button>
      </>
    )
  }

  return (
    <li className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span onClick={handleAddInput} style={{ cursor: 'pointer' }}>
        ✏️
      </span>
      {editInput && EditPriceInput()}
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
