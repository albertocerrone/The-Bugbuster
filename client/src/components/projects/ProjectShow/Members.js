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
  colors,
  Box
} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  icon: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  }
}))

const Members = ({ className, projectData, ...rest }) => {
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
              MEMBERS
            </Typography>

            <Grid
              container
              spacing={3}
              style={{ marginTop: '3px' }}
            >
              {projectData.members.map((member) => (
                <Grid item key={member.id}>
                  <Box
                    alignItems="center"
                    display="flex"
                  >
                    <Avatar
                      className={classes.avatar}
                      src={member.user.profileImage}
                    />
                    <Box
                      alignItems="center"
                      display="flex"
                      flexDirection="column"
                    >
                      <Typography
                        color="textPrimary"
                        variant="h5"
                      >
                        {`${member.user.firstName} ${member.user.lastName}`}
                      </Typography>
                      <Typography
                        color="textPrimary"
                        variant="h7"
                      >
                        {`${member.role} `}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Avatar className={classes.icon}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>


      </CardContent>
    </Card >
  )
}

Members.propTypes = {
  className: PropTypes.string
}

export default Members
