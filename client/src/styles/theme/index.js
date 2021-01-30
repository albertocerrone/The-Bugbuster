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
      main: colors.cyan[400]
    },
    secondary: {
      main: colors.purple[400]
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
