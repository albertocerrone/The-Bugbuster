/* eslint-disable no-unused-vars */
import React from 'react'
import { useHistory, Link as RouterLink } from 'react-router-dom'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
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

function Login() {

  const history = useHistory()
  const { formdata, errors, handleChange, setErrors } = useForm({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)

      setTimeout(() => {
        history.push('/home')
      }, 500)
    } catch (err) {
      const errorobj = {
        email: err.response.data.detail,
        password: err.response.data.detail
      }
      setErrors(errorobj)
      console.log('err.response.data: ', err.response.data)
      console.log('Errors: ', errors)
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
              error={(errors.email)}
              fullWidth
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
              helperText={errors.detail}
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              value={formdata.password}
              variant="outlined"
              type="password"
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Login now
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Do you need an account?
              {' '}
              <Link
                component={RouterLink}
                to="/register"
                variant="h6"
              >
                Register Now
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

export default Login
