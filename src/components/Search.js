import React, { useState } from 'react'

function Search({ setSearchName }) {
  const [search, setSearch] = useState('')
  const handleSearch = ({ target }) => {
    setSearch(target.value)
    setSearchName(target.value)
  }

  return (
    <div className='searchbar'>
      <label htmlFor='search'>Search Plants:</label>
      <input type='text' id='search' value={search} placeholder='Type a name to search...' onChange={handleSearch} />
    </div>
  )
}

export default Search
