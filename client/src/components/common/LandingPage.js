/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Container, Typography, makeStyles, Button, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  },
  logo: {
    fontSize: 85,
    background: 'linear-gradient(96.21deg, #E751D8 39.3%, #17D5EF 90.17%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  firstBug: {
    position: 'absolute',
    width: '50%',
    height: '55%',
    left: '-5%',
    top: '-10%',
    transform: 'rotate(140deg)',
    zIndex: '-1',
    color: 'rgba(23, 213, 239, 0.07)'
  },
  secondBug: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '55%',
    top: '50%',
    zIndex: '-1',
    color: 'rgba(231, 81, 216, 0.07)',
    transform: 'rotate(40deg)'
  }
}))



function LandingPage() {

  const classes = useStyles()

  return (
    <Container fixed >
      <Grid container
        justify="space-evenly"
        alignItems="center"
        className={classes.root}
      >
        <BugReportRoundedIcon className={classes.firstBug} />
        <BugReportRoundedIcon className={classes.secondBug} />
        <Grid item xs={12} sm={6} >
          <Grid container
            direction="column"
            spacing={3}
          >
            <Grid item>
              <Grid container
                alignItems="baseline"

              >
                <Grid item>
                  <Typography
                    variant="h2"
                  >
                    the
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h1"
                    gutterBottom="true"
                    className={classes.logo}
                  >
                    BugBuster
                  </Typography>

                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="h3">
                the best bug tracker ever... We hope
              </Typography>

            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container
            justify="space-evenly"
          >
            <Grid item>
              <Button
                variant="contained"
                size="large"
                startIcon={<MeetingRoom />}
                color="primary"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                startIcon={<AccountCircleIcon />}
                color="secondary"
                component={Link}
                to="/register"
              >
                Sign-Up
              </Button>
            </Grid>
          </Grid>


        </Grid>
      </Grid>
    </Container >
  )

}

export default LandingPage