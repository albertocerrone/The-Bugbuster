import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import GlobalStyles from './styles/GlobalStyles'
import { makeStyles } from '@material-ui/core'

import LandingPage from './components/common/LandingPage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Bars from './components/common/Bars'
import Home from './components/projects/Home'
import NewProject from './components/projects/NewProject'
import NewTicket from './components/tickets/NewTicket'
import SetRoles from './components/roles&groups/SetRoles'
import AccountPage from './components/common/AccountPage'
import ProjectShow from './components/projects/ProjectShow'
import TicketsIndex from './components/tickets/TicktetsIndex'
import TicketShow from './components/tickets/TicketShow'
import PostComment from './components/common/comments/PostComment'

import theme from './styles/theme/index'

const useStyles = makeStyles((theme) => ({

  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}))

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <div className="">
            <Bars />
            <div className={classes.wrapper}>
              <div className={classes.contentContainer}>
                <div className={classes.content}>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/new-project" component={NewProject} />
                  <Route exact path="/home/projects/:id/new-ticket" component={NewTicket} />
                  <Route exact path="/home/projects/:id/roles" component={SetRoles} />
                  <Route exact path="/home/projects/:id" component={ProjectShow} />
                  <Route exact path="/home/projects/:id/ticket/:idTicket/new-comment" component={PostComment} />
                  <Route exact path="/tickets" component={TicketsIndex} />
                  <Route exact path="/tickets/:id" component={TicketShow} />
                  <Route exact path="/account" component={AccountPage} />
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
