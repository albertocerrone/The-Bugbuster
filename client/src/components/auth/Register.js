import React from 'react'
import axios from 'axios' 
import { useHistory } from 'react-router-dom'
import ImageUpload from '../../components/ImageUpload'

function Register() {

  const history = useHistory()
  const [formdata, setFormdata] = React.useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
    first_name: '',
    last_name: ''
  })
  const [errors, setErrors] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
    firstName: '',
    lastName: ''
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

      setTimeout(() => {
        history.push('/login')
      }, 500)
    } catch (err) {
      const data = err.response.data
      const errarr = {
        username: data.username ? data.username[0] : '',
        email: data.email ? data.email[0] : '',
        password: data.password ? data.password[0] : '',
        passwordConfirmation: data.passwordConfirmation ? data.passwordConfirmation[0] : '',
        profileImage: data.profileImage ? data.profileImage[0] : '',
        firstName: data.firstName ? data.firstName[0] : '',
        lastName: data.lastName ? data.lastName[0] : ''
      }
      if (errarr) {
        setErrors(errarr)
      } else {
        // setErrors('')
      }
      // errors = err.response.data.username[0]
      console.log('err.response.data: ', data)
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
          <p>{errors.username}</p>
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={formdata.email}
          />
          <p>{errors.email}</p>
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
          <p>{errors.password}</p>
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
          <p>{errors.passwordConfirmation}</p>
        </div>
        <div>
          <label>Profile Image</label>
          <ImageUpload
            value={formdata.profile_image}
            name="profile_image"
            onChange={handleChange}
          />
          <input
            value={formdata.profile_image}
            name="profile_image"
            onChange={handleChange}
          />
          <p>{errors.profileImage}</p>
        </div>
        <div>
          <label>First Name</label>
          <input
            placeholder="first name"
            name="first_name"
            onChange={handleChange}
            value={formdata.first_name}
          />
          <p>{errors.firstName}</p>
        </div>
        <div>
          <label>Last Name</label>
          <input
            placeholder="last name"
            name="last_name"
            onChange={handleChange}
            value={formdata.last_name}
          />
          <p>{errors.lastName}</p>
        </div>
        <div className="button_wrapper flexend">
          <button type="submit">
            Register
          </button>
        </div>
      </form>
    </section>
  )
}


export default Register
