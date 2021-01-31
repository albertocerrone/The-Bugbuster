import React from 'react'
import { useHistory } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Login() {

  const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    email: '',
    password: ''
  })


  const handleChange = event => {
    setFormdata({ ...formdata, [event.target.name]: event.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await loginUser(formdata)

      if (data.message === 'Unauthorized') {
        // setTimeout(()=>{
        //   e.target.classList.remove('shake')
        // },500)
        console.log(data.message)
        return
      }
      setTimeout(() => {
        setToken(data.token)
        history.push('/home')
      }, 500)

    } catch (err) {
      console.log('err.response.data: ', err.response.data)
      console.log('Sorry failure to load the login page')
      // setTimeout(()=>{
      //   e.target.classList.remove('shake')
      // },500)
    }

    console.log('submitting', formdata)
  }

  return (
    <>
      <h1>This is the login page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={formdata.email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={formdata.password}
          />
        </div>
        <div className="button_wrapper flexend">
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  )

}

export default Login
