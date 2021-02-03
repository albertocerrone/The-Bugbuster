/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { Link as RouterLink, useParams, useHistory } from 'react-router-dom'
import { getSingleProject } from '../../../lib/api'

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
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}))

function ProjectShow() {
  const history = useHistory()
  const { id } = useParams()
  const [projectData, setProjectData] = React.useState(null)
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpen(!open)
    history.push(`/home/projects/${id}/new-ticket`)
  }

  //* get single item
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleProject(id)
        setProjectData(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])



  // const handleProjectDelete = async event => { //Delete Comments Logic 
  //   const commentId = event.target.value 
  //   try {
  //     await deleteComment(id, commentId)
  //     setCommentToDelete(event.target.value) 
  //   } catch (err) {
  //     if (err.response.data.message === 'Unauthorized') {
  //       setUnauthorized(true)
  //       return 
  //     }
  //   }
  // }


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



          {/* <Tooltip
        title="Add Members"
        aria-label="add"
        enterDelay={400}
        leaveDelay={250}
      >
        <Fab
          color="secondary"
          size="large"
          className={classes.absolute}
          onClick={handleClick}
          component={RouterLink} to={`/home/projects/${id}/roles`}
        >
          <AddIcon />
        </Fab>
      </Tooltip> */}
          <Tooltip
            title="Add Ticket"
            aria-label="add"
            enterDelay={400}
            leaveDelay={250}
          >
            <Fab
              color="secondary"
              size="large"
              className={classes.absolute}
              onClick={handleClick}
              component={RouterLink}
              to={`/home/project/${id}/new-ticket`}
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

