/* eslint-disable no-unused-vars */
import React from 'react'
import { Grid, Container, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh'
  }
}))

function LandingPage() {

  const classes = useStyles()

  return (
    <Container fixed >
      <Grid container
        justify="space-around"
        alignItems="center"
        className={classes.root}
      >
        <Grid item >
          <Typography variant="h3">
            the
          </Typography>
        </Grid>
        <Grid item >
          <Typography variant="h3">
            <span role="img" aria-label="logo">🧀</span>
            Welcome to Cheesebored
            <span role="img" aria-label="logo">🧀</span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )

}

export default LandingPage