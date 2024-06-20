import React, { useState } from 'react'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

function PlantPage() {
  const [submitTrigger, setSubmitTrigger] = useState(false)
  const handleSubmitTrigger = () => setSubmitTrigger(!submitTrigger)

  return (
    <main>
      <NewPlantForm handleSubmitTrigger={handleSubmitTrigger} />
      <Search />
      <PlantList submitTrigger={submitTrigger} />
    </main>
  )
}

export default PlantPage
