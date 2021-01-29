import React from 'react'
import axios from 'axios'
// // import { useHistory } from 'react-router-dom'

function Register() {

  // const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image:
      'https://res.cloudinary.com/dcwxp0m8g/image/upload/v1610368867/pokezon/default_user_image.png',
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
      //   history.push('/pokelogin')
      // },500)
    } catch (err) {
      console.log(err.response)
    }
  }
  function registerUser(formdata) {
    return axios.post('/auth/register', formdata)
  }

  return (
    <section className="page_wrapper float_up_register">
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
          <label></label>
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
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={formdata.password}
          />
        </div>
        <div>
          <label>Password Confirmation</label>
          <input
            placeholder="passwordConfirmation"
            name="password_confirmation"
            onChange={handleChange}
            value={formdata.password_confirmation}
          />
        </div>
        <div>
          <label>Profile Image</label>
          <input
            placeholder="profile image"
            name="profile_image"
            onChange={handleChange}
            value={formdata.profile_image}
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
