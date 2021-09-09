import styled from 'styled-components'
import { Button } from '../Home'

export const RelatorioForm = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 1em;

  ${Button} {
    align-self: flex-end;
    margin-top: 2em;
  }
`
export const DropZoneInput = styled.div`
  border: 2px dashed ${props => props.theme.colors.text};
  border-radius: 8px;
  width: 90%;
  height: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FileFieldsContainer = styled.div`
  display: flex;
  gap: 1em;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const InputFieldCheckBox = styled.input`
  display: none;
`

export const FileFieldCheck = styled.label`
  padding: 0 1em 0 1em;
  height: 2em;
  background-color: #aeb3c1;
  border-radius: 8px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  ${InputFieldCheckBox}:checked + & {
    color: white;
    background-color: ${props => props.theme.colors.info};
  }
`

export const FluxSearchItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition: all 0.2s;

  width: 100%;
  height: 0em;
  position: absolute;
  top: 3em;
  border-radius: 8px;
  backdrop-filter: blur(16px) saturate(180%);
  background-color: ${props => props.theme.colors.backgroundTransparent};
  border-radius: 12px;
  box-shadow: 10px 10px 20px ${props => props.theme.colors.backgroundShadow};
  flex-direction: column;
  gap: 1em;
  max-height: 18em;
  /* overflow: overlay; */
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 1em;
    margin: 1em 0 1em 0;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.backgroundLight};
    border-radius: 8px;
    transition: all 0.2s;

    &:hover {
      background-color: ${props => props.theme.colors.backgroundLighter};
    }
  }

  span {
    margin-left: 1em;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.textHover};
    }
  }
`
export const FluxSearchContainer = styled.div`
  position: relative;
`
export const FluxSearchInput = styled.input`
  outline: none;
  height: 2.5em;
  width: 23em;
  border-radius: 16px;
  border: 2px solid ${props => props.theme.colors.text};
  background-color: transparent;
  padding: 0 1em 0 1em;
  color: ${props => props.theme.colors.text};

  &:focus + ${FluxSearchItems}, & + ${FluxSearchItems}:active {
    height: auto;
    padding: 1em 0 1em 0;
  }
`

export const FileDetail = styled.div`
  border: 2px solid ${props => props.theme.colors.text};
  border-radius: 8px;
  height: 2em;
  padding: 0 2em 0 2em;
`
