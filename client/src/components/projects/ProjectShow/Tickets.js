/* eslint-disable no-unused-vars */
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
  Paper,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableContainer
} from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import TicketRow from './TicketRow'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  icon: {
    backgroundColor: colors.blue[600],
    height: 56,
    width: 56
  }
}))

const Tickets = ({ className, projectData, ...rest }) => {
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
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <Typography
              color="textSecondary"
              variant="h4"
            >
              TICKETS
            </Typography>
          </Grid>

          <Grid item>
            <Avatar className={classes.icon}>
              <AssignmentIcon />
            </Avatar>
          </Grid>
          <Grid
            container
            spacing={3}
            style={{ marginTop: '3px', padding: '0 5px' }}
            alignItems="center"

          >
            <TableContainer component={Paper} >
              <Table aria-label="collapsible table" >
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Owner</TableCell>
                    <TableCell align="right">Assigned User</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                {projectData.tickets.map(ticket => (
                  <TicketRow
                    key={ticket.id}
                    ticket={ticket} />
                ))}
              </Table>
            </TableContainer>
          </Grid>
        </Grid>


      </CardContent>
    </Card >
  )
}

Tickets.propTypes = {
  className: PropTypes.string
}

export default Tickets
