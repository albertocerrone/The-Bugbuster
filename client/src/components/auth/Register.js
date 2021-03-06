/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory, Link as RouterLink } from 'react-router-dom'
import ImageUpload from '../common/ImageUpload'
import { registerUser } from '../../lib/api'
import useForm from '../../utils/useForm'
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded'

import {
  Box,
  Button,
  Container,
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
    borderRadius: '45px',
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    fontSize: 45,
    fontWeight: 600,
    background: 'linear-gradient(96.21deg, #E751D8 39.3%, #17D5EF 90.17%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  firstBug: {
    position: 'fixed',
    width: '50%',
    height: '55%',
    left: '-5%',
    top: '-10%',
    transform: 'rotate(140deg)',
    zIndex: '-1',
    color: 'rgba(23, 213, 239, 0.07)',
    overflow: 'hidden'
  },
  secondBug: {
    position: 'fixed',
    width: '50%',
    height: '50%',
    left: '55%',
    top: '50%',
    zIndex: '-1',
    color: 'rgba(231, 81, 216, 0.07)',
    transform: 'rotate(40deg)',
    overflow: 'hidden'
  }
}))

function Register() {

  const history = useHistory()

  const { formdata, errors, handleChange, setErrors } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
    firstName: '',
    lastName: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await registerUser(formdata)
      console.log(response)

      setTimeout(() => {
        history.push('/login')
      }, 500)
    } catch (err) {
      console.log(err.response.data)
      setErrors(err.response.data)
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
            <Box mt={1} style={{ alignSelf: 'center' }}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h3"
              >
                the <span className={classes.logo}>BugBuster</span>
              </Typography>
            </Box>
            <TextField
              error={Boolean(errors.username)}
              fullWidth
              helperText={errors.username}
              label="Username"
              margin="normal"
              name="username"
              onChange={handleChange}
              value={formdata.username}
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.firstName)}
              fullWidth
              helperText={errors.firstName}
              label="First Name"
              margin="normal"
              name="firstName"
              onChange={handleChange}
              value={formdata.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.lastName)}
              fullWidth
              helperText={errors.lastName}
              label="Last Name"
              margin="normal"
              name="lastName"
              onChange={handleChange}
              value={formdata.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.email)}
              fullWidth
              helperText={errors.email}
              label="E-Mail"
              margin="normal"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.password)}
              fullWidth
              helperText={errors.password}
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              value={formdata.password}
              variant="outlined"
              type="password"
            />
            <TextField
              error={Boolean(errors.passwordConfirmation)}
              fullWidth
              helperText={errors.passwordConfirmation}
              label="Password Confirmation"
              margin="normal"
              name="passwordConfirmation"
              onChange={handleChange}
              value={formdata.passwordConfirmation}
              variant="outlined"
              type="password"
            />
            <div>
              <ImageUpload
                value={formdata.profile_image}
                name="profile_image"
                buttonText='Upload Profile Picture'
                onChange={handleChange}
              />
              <p>{errors.profileImage}</p>
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
              variant="body2"
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
        </Container>
      </Box>
      <div className="bugs">

        <BugReportRoundedIcon className={classes.firstBug} />
        <BugReportRoundedIcon className={classes.secondBug} />
      </div>
    </Container>

  )
}


export default Register
