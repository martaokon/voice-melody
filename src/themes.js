import { createMuiTheme } from '@material-ui/core/styles'
import { plPL } from '@material-ui/core/locale'
import { css } from 'styled-components/macro'

export const BLUE = '#1c73ff'
export const DARK_BLUE = '#2a3552'
export const LIGHT_RED = '#ffcdcc'
export const LIGHT_PURPLE = '#8b95b2'
export const WHITE = '#ffffff'

export const darkTheme = createMuiTheme({
  palette: {
    background: {
      dark: DARK_BLUE,
    },
    text: {
      navigationDraver: '#cfd2d6',
    }
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
      },
      outlined: {
        color: WHITE,
        borderColor: WHITE
      }
    },
    MuiListItemIcon: {
      root: {
        color: WHITE
      }
    },
    MuiListItemText: {
      root: {
        color: WHITE
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
