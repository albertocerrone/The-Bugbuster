import React from 'react'
import { isAuthenticated } from '../../lib/auth'
import { useHistory, Link, useLocation } from 'react-router-dom'
import { getProfile } from '../../lib/api'
import { logout } from '../../lib/auth'


import LoadingScreen from './LoadingScreen'


function Home() {
  const history = useHistory()
  const [userData, setUserData] = React.useState(null)
  const [unauthorized, setUnauthorized] = React.useState(false)
  const { pathname } = useLocation()


  React.useEffect(() => {
    if (!isAuthenticated) return
    const getData = async () => {
      try {
        const { data } = await getProfile()
        console.log(data)
        setUserData(data)
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          setUnauthorized(true)
          return
        }
      }
    }
    getData()
  }, [pathname])


  const handleLogout = () => {
    logout()
    history.push('/')
    setUserData(null)
    // window.location.reload()
  }


  function checkStatus() {
    if (unauthorized) {
      return (
        <div>
          <h1>Access Denied: Please <Link to={'/login'}>Login</Link> or <Link to={'/register'}>Register</Link> to view this page</h1>
        </div>
      )
    } else {
      <LoadingScreen />
    }
  }



  return (
    <>
      {userData !== null ?
        <>
          <div>
            Home Page
          </div>
          <div>
            <button onClick={handleLogout} >
              {/* <img src={} alt="" /> */}
              Log out
            </button>
          </div>
        </>
        :
        checkStatus()
      }
    </>
  )
}

export default Home