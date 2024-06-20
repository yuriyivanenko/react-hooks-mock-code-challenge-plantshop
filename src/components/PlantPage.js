import React, { useState } from 'react'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

function PlantPage() {
  const [submitTrigger, setSubmitTrigger] = useState(false)
  const [searchName, setSearchName] = useState('')
  const handleSubmitTrigger = () => setSubmitTrigger(!submitTrigger)

  return (
    <main>
      <NewPlantForm handleSubmitTrigger={handleSubmitTrigger} />
      <Search setSearchName={setSearchName} />
      <PlantList submitTrigger={submitTrigger} searchName={searchName} />
    </main>
  )
}

export default PlantPage
