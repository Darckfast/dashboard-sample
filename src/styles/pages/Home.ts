import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2.5em;
`
export const ContentHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2em;

  height: 2em;

  h2 {
    font-weight: normal;
  }
`

// export const Content = styled.main`
//   width: 100%;
//   height: 100%;

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
export const Button = styled.button`
  cursor: pointer;
  height: 2.6em;

  border-radius: 4px;

  color: ${props => props.theme.colors.buttonText};
  background-color: ${props => props.theme.colors.primary};

  border: none;
  padding: 0 1em 0 1em;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.primaryLight};
  }

  &:disabled {
    cursor: auto;
    background-color: ${props => props.theme.colors.disabled};
  }
`

export const ButtonInfo = styled(Button)`
  background-color: ${props => props.theme.colors.info} !important;

  &:hover {
    background-color: ${props => props.theme.colors.infoLight} !important;
  }
`
