/* eslint-disable no-unused-vars */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Box
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { getUsers } from '../../lib/api'
import Toolbar from './Toolbar'
import TableUsers from './TableUsers'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto'
  },
  button: {
    margin: theme.spacing(0.5, 0)
  },
  toolbar: {
    margin: '2%'
  }
}))



function SetRoles() {
  const classes = useStyles()
  const history = useHistory()
  const [users, setUsers] = React.useState()

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getUsers()
      setUsers(data)
    }
    getData()
  }, [setUsers])

  return (
    <>

      <Typography
        align="center"
        color="textPrimary"
        variant="h2"
      >
        Set Roles in your Team
      </Typography>
      <Box mt={3}>
        <Toolbar className={classes.toolbar} />

        {!users ?
          <p>loading...</p>
          :
          <>

            <TableUsers users={users} />

          </>
        }
      </Box>
    </>
  )
}

export default SetRoles