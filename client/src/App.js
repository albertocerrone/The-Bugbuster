import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './components/register'


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

// import React from 'react'

// class App extends React.Component {
//   async componentDidMount() {
//     try {
//       const response = await fetch('/api/tickets/')
//       const data = await response.json()
//       console.log(data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   render() {
//     return null
//   }
// }

// export default App
