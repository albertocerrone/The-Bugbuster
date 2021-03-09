/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { Link as RouterLink, useParams, useHistory } from 'react-router-dom'
import { getSingleProject, getProfile } from '../../../lib/api'
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Tooltip,
  Fab,
  Link
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import TasksProgress from './TaskProgress'
import Description from './Description'
import Members from './Members'
import Tickets from './Tickets'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1
  },
  productCard: {
    height: '100%'
  },
  fixed: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3)
  }
}))

function ProjectShow() {
  const history = useHistory()
  const { id } = useParams()
  const [projectData, setProjectData] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()
  const [user, setUser] = React.useState()
  const [userRole, setUserRole] = React.useState()

  const handleClick = () => {
    setOpen(!open)
    history.push(`/home/projects/${id}/new-ticket`)
  }

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getProfile()
        setUser(data)
      } catch (err) {
        console.log(err)
        return
      }
    }
    getData()
  }, [])


  //* get single item
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleProject(id)
        setProjectData(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])


  return (
    <Container
      className={classes.root}
    >
      { !projectData ?
        <p>loading...</p>
        :
        <>
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
            style={{ margin: '0 0 20px 0' }}
          >
            {projectData.name}
          </Typography>

          <Container maxWidth={false} >
            <Grid
              container
              spacing={3}
            >


              <Grid
                item
                sm={6}
                xl={3}
                xs={12}
              >
                <Description projectData={projectData} />
              </Grid>

              <Grid
                item
                sm={6}
                xl={3}
                xs={12}
              >
                <TasksProgress />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Members projectData={projectData} />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Tickets projectData={projectData} />
              </Grid>
            </Grid>
          </Container>

          <Tooltip
            title="Add New Ticket"
            aria-label="add"
            enterDelay={400}
            leaveDelay={250}
          >
            <Fab
              color="secondary"
              size="large"
              className={classes.fixed}
              onClick={handleClick}
              component={RouterLink}
              to={`/home/projects/${id}/new-ticket`}
            >
              <AddIcon />
            </Fab>
          </Tooltip>


        </>
      }
    </Container>
  )
}

export default ProjectShow

