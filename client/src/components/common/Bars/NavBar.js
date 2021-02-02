import React, { useState } from 'react'
import { useHistory, Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import InputIcon from '@material-ui/icons/Input'
import { logout } from '../../../lib/auth'

const useStyles = makeStyles(() => ({
  root: {
    backdropFilter: 'blur(10px)',
    background: 'rgba(23, 213, 239, 0.7)'

  },
  avatar: {
    width: 60,
    height: 60
  },
  logo: {
    fontSize: 45,
    fontWeight: 700,
    background: 'linear-gradient(96.21deg, #E751D8 39.3%, purple 90.17%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
}))

const NavBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles()
  const history = useHistory()

  const [notifications] = useState([])

  const handleLogout = () => {
    logout()
    history.push('/')
  }
  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={1}
      {...rest}
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/home">
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h4"
          >
            the <span className={classes.logo}>BugBuster</span>
          </Typography>
        </RouterLink>
        <Box flexGrow={1} />
        <IconButton
          color="inherit"
          onClick={handleLogout}

        >
          <InputIcon />
        </IconButton>
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
}

export default NavBar