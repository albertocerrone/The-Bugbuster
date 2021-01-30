/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory, Link as RouterLink } from 'react-router-dom'
import ImageUpload from '../../ImageUpload'
import useForm from '../../../utils/useForm'
import { registerUser } from '../../../lib/api'

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
  },
  form: {
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(30px)',
    padding: '5%',
    borderRadius: '45px'
  }
}))

function Register() {

  const history = useHistory()

  const { formdata, handleChange, errors, setErrors } = useForm({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
    first_name: '',
    last_name: ''
  })




  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      setErrors(err.response.data.errors)
    }
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
        <Container maxWidth="sm">

          <form onSubmit={handleSubmit} className={classes.form}>
            <Box mb={3}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use your email to create new account
              </Typography>
            </Box>
            <TextField
              fullWidth
              helperText={errors.username}
              label="Username"
              margin="normal"
              name="username"
              onChange={handleChange}
              value={formdata.username}
              variant="outlined"

            />
            <div>
              <label>Username</label>
              <input
                placeholder="username"
                name="username"
                onChange={handleChange}

              />
              {/* {errors.username === undefined ? null : <p>{errors.username[0]}</p>} */}
            </div>



            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign up now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Have an account?
              {' '}
              <Link
                component={RouterLink}
                to="/login"
                variant="h6"
              >
                Sign in
              </Link>
            </Typography>
          </form>







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
        </Container>

      </Box>
    </Container>
  )
}


export default Register
