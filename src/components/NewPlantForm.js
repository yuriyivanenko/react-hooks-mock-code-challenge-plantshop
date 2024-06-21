import React, { useState } from 'react'

function NewPlantForm({ handleSubmitTrigger }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
  })

  const handleOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const result = response.json()
      handleSubmitTrigger()
      setForm({
        name: '',
        image: '',
        price: '',
      })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='new-plant-form'>
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type='text' value={form.name} name='name' placeholder='Plant name' onChange={handleOnChange} />
        <input type='text' value={form.image} name='image' placeholder='Image URL' onChange={handleOnChange} />
        <input
          type='number'
          value={form.price}
          name='price'
          step='0.01'
          placeholder='Price'
          onChange={handleOnChange}
        />
        <button type='submit'>Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
