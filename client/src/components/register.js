import React from 'react'
import axios from 'axios'
// // import { useHistory } from 'react-router-dom'
import ImageUploadField from './imageUpload'

function Register() {

  // const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
    first_name: '',
    last_name: ''
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  console.log(formdata)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await registerUser(formdata)
      console.log(response)

      // setTimeout(()=>{
      //   history.push('/login')
      // },500)
    } catch (err) {
      console.log(err.response)
    }
  }
  function registerUser(formdata) {
    return axios.post('/api/auth/register/', formdata)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={formdata.username}
          />
        </div>
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
        <div>
          <label>Password Confirmation</label>
          <input
            type="password"
            placeholder="passwordConfirmation"
            name="password_confirmation"
            onChange={handleChange}
            value={formdata.password_confirmation}
          />
        </div>
        <div>
          <label>Profile Image</label>
          <ImageUploadField
            value={formdata.profile_image}
            name="profile_image"
            onChange={handleChange}
          />
          <input
            value={formdata.profile_image}
            name="profile_image"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            placeholder="first name"
            name="first_name"
            onChange={handleChange}
            value={formdata.first_name}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder="last name"
            name="last_name"
            onChange={handleChange}
            value={formdata.last_name}
          />
        </div>
        <div className="button_wrapper flexend">
          <button type="submit">
            {/* <img src="" alt="pokeball" /> */}
            Register
          </button>
        </div>
      </form>
    </section>
  )
}


export default Register
