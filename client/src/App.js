import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import GlobalStyles from './styles/GlobalStyles'

import LandingPage from './components/common/LandingPage'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Bars from './components/common/Bars'
import Home from './components/common/Home'
import CreateProject from './components/common/CreateProject'

import theme from './styles/theme/index'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <div className="">
            <Bars />
            <Route exact path="/home" component={Home} />
            <Route exact path="/create-project" component={CreateProject} />
          </div>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

