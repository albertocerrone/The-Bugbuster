import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
<<<<<<< HEAD
import Register from './components/register'
import Login from './components/login'
=======
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import GlobalStyles from './styles/GlobalStyles'
>>>>>>> 5346e71c5740450e203b2df5131acbe6944fa67f

import LandingPage from './components/common/LandingPage'
import Register from './components/auth/Register'
import SideBar from './components/common/SideBar'
import NavBar from './components/common/NavBar'

import theme from './styles/theme/index'

function App() {

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
=======
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <div className="">
            <SideBar />
            <NavBar />
          </div>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
>>>>>>> 5346e71c5740450e203b2df5131acbe6944fa67f
  )
}

export default App

