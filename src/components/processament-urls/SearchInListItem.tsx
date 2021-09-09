import React, { useState, useEffect } from 'react'

export const SearchInListItem: React.FC<any> = ({ flux, execOnSelect }) => {
  const [itemFlux, setItemFlux] = useState()

  useEffect(() => setItemFlux(flux), [])

  const onSelect = () => {
    execOnSelect(itemFlux)
  }

  return <span onClick={onSelect}>{flux?.name}</span>
}
