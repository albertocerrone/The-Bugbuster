import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'
const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  }
}))

const Description = ({ className, projectData, ...rest }) => {
  const classes = useStyles()

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              variant="h4"
            >
              DESCRIPTION
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
              gutterBottom
            >
              {projectData.description}
            </Typography>
            <Typography
              color="textSecondary"
              variant="h4"
            >
              DEADLINE
            </Typography>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              {projectData.deadline}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DescriptionIcon />
            </Avatar>
          </Grid>
        </Grid>


      </CardContent>
    </Card>
  )
}

Description.propTypes = {
  className: PropTypes.string
}

export default Description
