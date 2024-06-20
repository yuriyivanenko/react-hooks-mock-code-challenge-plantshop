import React, { useState } from 'react'
import NewPlantForm from './NewPlantForm'
import PlantList from './PlantList'
import Search from './Search'

function PlantPage() {
  const [reFetchTrigger, setReFetchTrigger] = useState(false)
  const [searchName, setSearchName] = useState('')
  const handleSubmitTrigger = () => setReFetchTrigger(!reFetchTrigger)

  return (
    <main>
      <NewPlantForm handleSubmitTrigger={handleSubmitTrigger} />
      <Search setSearchName={setSearchName} />
      <PlantList handleSubmitTrigger={handleSubmitTrigger} reFetchTrigger={reFetchTrigger} searchName={searchName} />
    </main>
  )
}

export default PlantPage
