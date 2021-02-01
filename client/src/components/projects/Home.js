/* eslint-disable no-unused-vars */
import React from 'react'
import { isAuthenticated } from '../../lib/auth'
import { Link, useLocation } from 'react-router-dom'
import { getProfile } from '../../lib/api'


import LoadingScreen from '../common/LoadingScreen'
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  html: {
    overflow: 'hidden' 
  },
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    flexGrow: 1
  },
  productCard: {
    height: '100%'
  }
}))

function Home() {
  const [userRole, setUserRole] = React.useState(null)
  const [unauthorized, setUnauthorized] = React.useState(false)
  console.log(unauthorized)


  React.useEffect(() => {
    if (!isAuthenticated) return
    const getData = async () => {
      try {
        const { data } = await getProfile()
        console.log(data)
        setUserRole(data.group)
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          setUnauthorized(true)
          return
        }
      }
    }
    getData()
  }, [])


  const classes = useStyles()
  return (
    <Container
      className={classes.root}
    >
      {!userRole ?
        <p>loading...</p>
        :
        <Container
          maxWidth={false}
        >
          <Typography
            align="center"
            color="textPrimary"
            variant="h2"
          >
            My Projects
          </Typography>
          <Box mt={4}>
            <Grid
              container
              spacing={3}
            >
              {userRole.map((role) => (
                <Grid
                  item
                  key={role.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProjectCard
                    className={classes.projectCard}
                    role={role}

                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            mt={3}
            display="flex"
            justifyContent="center"
          >
            <Pagination
              color="primary"
              count={1}
              size="small"
            />
          </Box>
        </Container>
      }
    </Container>
  )
}

export default Home