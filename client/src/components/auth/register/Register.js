/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ImageUpload from '../../imageUpload'
import * as Yup from 'yup'
import { Formik } from 'formik'

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

function Register() {

  const history = useHistory()
  let errors
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


  // const handleValidation = (err) => {
  //   setErrors(err.response.data)
  //   console.log(errors)
  // }



  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await registerUser(formdata)
      console.log(response)

      setTimeout(() => {
        history.push('/login')
      }, 500)
    } catch (err) {
      errors = err.response.data
      console.log(errors)
    }
  }
  function registerUser(formdata) {
    return axios.post('/api/auth/register/', formdata)
  }



  const classes = useStyles()

  return (
    <Container fixed
      className={classes.root}>

      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center" >
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              placeholder="username"
              name="username"
              onChange={handleChange}
              // onChange={()=>{
              //   handleChange()
              //   // handleValidation()
              // }}
              value={formdata.username}
            />
            {/* {errors.username === undefined ? null : <p>{errors.username[0]}</p>} */}
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
              Register
            </button>
          </div>
        </form>
      </Box>
    </Container>
  )
}


export default Register
