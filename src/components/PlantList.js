import React, { useEffect, useState } from 'react'
import PlantCard from './PlantCard'

function PlantList() {
  const [plantList, setPlantList] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:6001/plants')
        const data = await response.json()
        setPlantList(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchData()
  }, [])

  if (!plantList) return <h2>Loading...</h2>

  return (
    <ul className='cards'>
      {plantList.map((plant) => {
        return <PlantCard key={`plant-${plant.name}`} plantInfo={plant} />
      })}
    </ul>
  )
}

export default PlantList
