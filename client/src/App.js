import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import GlobalStyles from './styles/GlobalStyles'

import LandingPage from './components/common/LandingPage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import SideBar from './components/common/SideBar'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'

import theme from './styles/theme/index'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <div className="">
            <SideBar />
            <NavBar />
          </div>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

