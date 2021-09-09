export const darkTheme = {
  colors: {
    background: '#0F162F',
    backgroundLight: '#19213C',
    backgroundLighter: '#334377',
    backgroundTransparent: '#111928b8',
    backgroundShadow: '#101831',
    text: '#C3C9DF',
    buttonText: '#242C49',
    textHover: '#849EFF',
    primary: '#2ecc71',
    info: '#3498db',
    error: '#F84868',
    primaryLight: '#32f1a1',
    infoLight: '#4ccdf7',
    disabled: '#626984'
  }
}

export const lightTheme = {
  colors: {
    ...darkTheme.colors,
    background: 'white',
    backgroundLight: '#f7f7f7',
    backgroundTransparent: '#e6e6e685',
    backgroundLighter: '#eaeaea',
    backgroundShadow: '#bebebe',
    text: 'black'
  }
}
