import React, { useEffect, useState } from 'react'
import PlantCard from './PlantCard'

function PlantList({ submitTrigger, searchName }) {
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
  }, [submitTrigger])

  if (!plantList) return <h2>Loading...</h2>

  const searchedList =
    searchName.length > 0
      ? plantList.filter((plant) => plant.name.toLowerCase().includes(searchName.toLowerCase()))
      : plantList

  return (
    <ul className='cards'>
      {searchedList.map((plant) => {
        return <PlantCard key={`plant-${plant.name}`} plantInfo={plant} />
      })}
    </ul>
  )
}

export default PlantList
