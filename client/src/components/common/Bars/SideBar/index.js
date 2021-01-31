/* eslint-disable no-undef */
import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core'
import DonutSmallIcon from '@material-ui/icons/DonutSmall'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ListIcon from '@material-ui/icons/List'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'
import SideItem from './SideItem'



const items = [
  {
    href: '/projects',
    icon: AssignmentIcon,
    title: 'Projects'
  },
  {
    href: '/tickets',
    icon: ListIcon,
    title: 'Tickets'
  },

  {
    href: '/analytics',
    icon: DonutSmallIcon,
    title: 'Analytics'
  },

  {
    href: '/account',
    icon: AccountCircleIcon,
    title: 'Account'
  },
  {
    href: '/settings',
    icon: SettingsIcon,
    title: 'Settings'
  }
]

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(30px)'
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(30px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 74,
    height: 74
  }
}))

const SideBar = ({ onMobileClose, openMobile, user }) => {
  const classes = useStyles()
  const { pathname } = useLocation()


  React.useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
  }, [pathname])


  const content = (

    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box p={2}>
        <List>
          {items.map((item) => (
            <SideItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Divider />
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.profileImage}
          to="/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.firstName}
          {user.lastName}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.username}
        </Typography>
      </Box>
    </Box>

  )

  return (


    <>
      < Hidden lgUp >
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden >
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>



  )
}

SideBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
}

SideBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
}

export default SideBar