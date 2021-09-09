import React from 'react'
import styled from 'styled-components'
import Icon from './svgBase'

const Svg = styled(Icon)`
  width: 16px;

  fill: ${props => props.theme.colors.text};

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  &.open {
    transform: rotate(-90deg);
  }
`

export const ChevronIcon = ({
  className,
  onClick
}: {
  className?: string
  onClick?: () => void
}): JSX.Element => (
  <Svg viewBox="0 0 512 512" className={className} onClick={onClick}>
    <path
      fill="currentColor"
      d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
    ></path>
  </Svg>
)
