import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 1em;

  display: flex;
  justify-content: center;
  align-self: center;
`

export const SideMenuList = styled.div`
  width: 15em;
  height: 100%;

  @media (max-width: 1200px) {
    width: 4em;
  }
`

export const ContentContainer = styled.div`
  width: 60em;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundLight};

  @media (max-width: 1200px) {
    width: 54em;
  }
`

export const MainHeader = styled.div`
  width: 60em;
  height: 4em;
  background-color: ${props => props.theme.colors.backgroundLight};
  border-radius: 8px;
  margin-top: 1em;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;

  padding: 0 1em 0 1em;

  @media (max-width: 1200px) {
    width: 54em;
  }
`

export const HeaderAndContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 1em;
`

export const SideMenuItems = styled.ul`
  margin-top: 8em;

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span.title {
      &::before {
        display: none;
      }
    }

    li {
      text-indent: 0 !important;
      cursor: pointer;
      svg {
        margin: auto;
        width: 32px;
        height: 32px;
        /* transform: scale(1.5); */
      }
      a {
        span {
          /* visibility: hidden; */
          display: none;
        }
      }
    }
  }

  span.title {
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      height: 2px;
      width: 11em;
      background-color: ${props => props.theme.colors.text};
      right: 0;
    }
  }

  li {
    text-indent: 1em;
    list-style-type: none;

    a {
      color: ${props => props.theme.colors.text};
      text-decoration: none;

      &:hover,
      &.active {
        color: ${props => props.theme.colors.textHover};
      }
    }

    &:hover {
      path {
        fill: ${props => props.theme.colors.textHover};
      }
    }
  }
`
