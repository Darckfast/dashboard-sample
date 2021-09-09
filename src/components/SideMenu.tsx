import React from 'react'
import {
  ContentContainer,
  HeaderAndContentContainer,
  MainContainer,
  MainHeader,
  SideMenuItems,
  SideMenuList
} from '../styles/components/SideMenu'
import { ToggleTheme } from './ToggleTheme'
import Link from 'next/link'
import { LinkIcon } from '../styles/icons/linkIcon'
import { HomeIcon } from '../styles/icons/homeIcon'

export const SideMenu: React.FC = ({ children }) => {
  return (
    <MainContainer>
      <SideMenuList>
        <SideMenuItems>
          <span className="title">Pyfrost</span>
          <li>
            <Link href="/">
              <a>
                <HomeIcon />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/processamento">
              <a>
                <LinkIcon />
                <span>Processamento</span>
              </a>
            </Link>
          </li>
        </SideMenuItems>
      </SideMenuList>
      <HeaderAndContentContainer>
        <MainHeader>
          <ToggleTheme />
        </MainHeader>
        <ContentContainer>{children}</ContentContainer>
      </HeaderAndContentContainer>
    </MainContainer>
  )
}
