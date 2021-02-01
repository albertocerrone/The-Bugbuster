import React from 'react'
import { useHistory } from 'react-router-dom'
import { createProject } from '../../lib/api'

import {
  Box,
  Button,
  Container,
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
  },
  logo: {
    fontSize: 45,
    fontWeight: 600,
    background: 'linear-gradient(96.21deg, #E751D8 39.3%, #17D5EF 90.17%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
}))

function newProject() {
  const [formdata, setFormdata] = React.useState({
    name: '',
    description: '',
    deadline: ''
  })
  const [errors, setErrors] = React.useState({
    name: '',
    description: '',
    deadline: ''
  })

  const history = useHistory()


  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newP = await createProject(formdata)
      console.log(newP)

      setTimeout(() => {
        history.push('/projects')
      }, 500)
    } catch (err) {
      const data = err.response.data
      const errarr = {
        name: data.name ? data.name[0] : '',
        description: data.description ? data.description[0] : '',
        deadline: data.deadline ? data.deadline[0] : ''
      }
      if (errarr) {
        setErrors(errarr)
      } 
      // else {
      //   setErrors('')
      // }
      console.log('err.response.data: ', data)
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
            <Box mb={3} style={{ marginLeft: '20%' }}>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h3"
              >
                the <span className={classes.logo}>BugBuster</span>
              </Typography>
            </Box>
            <TextField
              error={Boolean(errors.name)}
              fullWidth
              helperText={errors.name}
              label="Name"
              margin="normal"
              name="name"
              onChange={handleChange}
              value={formdata.name}
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.description)}
              fullWidth
              helperText={errors.description}
              label="Project Description"
              margin="normal"
              name="description"
              onChange={handleChange}
              value={formdata.description}
              variant="outlined"
            />
            <TextField
              error={Boolean(errors.deadline)}
              fullWidth
              helperText={errors.deadline}
              // label="Deadline"
              type="date"
              margin="normal"
              name="deadline"
              onChange={handleChange}
              value={formdata.deadline}
              variant="outlined"
            />
            <Box my={2}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create Project
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </Container>

  )

}

export default newProject
