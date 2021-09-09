import React, { createContext } from 'react'
import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { useDarkMode } from '../components/hooks/useDarkMode'
import { lightTheme, darkTheme } from '../styles/theme'
import { SideMenu } from '../components/SideMenu'
import { Head } from 'next/document'

type ThemeContextType = {
  currentTheme: {
    name: string
    activeTheme: DefaultTheme
  }
  changeTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [currentTheme, changeTheme] = useDarkMode(lightTheme, darkTheme)

  return (
    <ThemeProvider theme={currentTheme.activeTheme}>
      <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
        <SideMenu>
          <Component {...pageProps} />
          <GlobalStyle />
        </SideMenu>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
