import { createMuiTheme } from '@material-ui/core/styles'
import { plPL } from '@material-ui/core/locale'
import { css } from 'styled-components/macro'

export const BLUE = '#1c73ff'
export const DARK_BLUE = '#2a3552'
export const RED = '#ea4644'
export const DEEPER_RED = '#d13a38'
export const LIGHT_PURPLE = '#8b95b2'
export const WHITE = '#ffffff'

export const darkTheme = createMuiTheme({
  palette: {
    background: {
      dark: DARK_BLUE,
    },
    text: {
      navigationDraver: '#cfd2d6',
    },
    icon: {
      navigationDraver: LIGHT_PURPLE,
    },
    border: {
      table: LIGHT_PURPLE,
    },
  },
  typography: {
    fontFamily: 'Roboto'
  },
  overrides: {
    MuiButton: {
      contained: {
        padding: '5px 35px',
        border: `1px solid ${BLUE}`,
        borderRadius: '5px',
        backgroundColor: '#FFF',
        fontWeight: '600',
        letterSpacing: '0.7px',
        color: BLUE,
      },
      containedPrimary: {
        backgroundColor: BLUE,
        color: WHITE,
      },
      textSecondary: {
        color: WHITE,
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: BLUE,
        }
      },
    },
    MuiSwitch: {
      colorPrimary: {
        '&$checked': {
          color: BLUE,
        }
      },
    },
    MuiCircularProgress: {
      root: {
        padding: '4px',
      },
      colorPrimary: {
        color: BLUE,
      }
    },
    MuiBottomNavigationAction: {
      root: {
        '&$selected': {
          color: BLUE,
        }
      }
    }
  },
  scrollbar: css`
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      opacity: 1;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${DARK_BLUE};
    }
  `,
}, plPL)
