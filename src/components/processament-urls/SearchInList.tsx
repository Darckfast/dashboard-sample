import React, { useState } from 'react'
import {
  FluxSearchContainer,
  FluxSearchInput,
  FluxSearchItems
} from '../../styles/pages/processamento/NovoRelatorio'
import { SearchInListItem } from './SearchInListItem'

export const SearchInList: React.FC<any> = ({
  fluxes,
  formProps,
  onSelect
}) => {
  const [filter, setFilter] = useState(null)

  return (
    <FluxSearchContainer>
      <FluxSearchInput
        autoComplete="off"
        placeholder="Buscar fluxos"
        {...formProps}
        onChange={e => setFilter(e.target.value.toLowerCase())}
      />
      <FluxSearchItems>
        {fluxes
          ?.filter(flux =>
            filter ? flux.name.toLowerCase().includes(filter) : true
          )
          .map((flux, index) => (
            <SearchInListItem execOnSelect={onSelect} key={index} flux={flux} />
          ))}
      </FluxSearchItems>
    </FluxSearchContainer>
  )
}
