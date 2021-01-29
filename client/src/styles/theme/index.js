import { createMuiTheme, colors } from '@material-ui/core'
import shadows from './shadow'
import typography from './typography'

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.common.white,
      secondary: colors.common.white
    }
  },
  shadows,
  typography
})

export default theme
