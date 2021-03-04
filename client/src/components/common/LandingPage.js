/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Container, Typography, makeStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MeetingRoom from '@material-ui/icons/MeetingRoom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  },
  logo: {
    fontSize: '230%',
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



function LandingPage() {

  const classes = useStyles()

  return (

    <Container>

      <Grid container
        justify="space-around"
        alignItems="center"
        className={classes.root}

      >

        <Grid item >
          <Grid container
            direction="column"
          >
            <Grid item alignItems="baseline" >
              <Grid item>
                <Typography
                  variant="h1"
                >

                  the <span className={classes.logo}>BugBuster</span>
                </Typography>
              </Grid>

            </Grid>
            <Grid item>
              <Typography variant="h3">
                the best bug tracker ever... maybe
              </Typography>

            </Grid>

          </Grid>
        </Grid>
        <Grid>
          <Grid container
            justify="space-evenly"
            direction="row"
            spacing={3}
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
      </Grid >
      <div className="bugs">

        <BugReportRoundedIcon className={classes.firstBug} />
        <BugReportRoundedIcon className={classes.secondBug} />
      </div>
    </Container >

  )

}

export default LandingPage