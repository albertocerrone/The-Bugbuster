/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Checkbox, TableCell, TableRow, Avatar, FormControl, Radio, RadioGroup, FormControlLabel, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}))

function UserRow({ user, handleChangeCheckbox, setUserRole }) {

  const classes = useStyles()
  const [selectedRole, setSelectedRole] = React.useState('Developer')

  const handleChange = (e) => {
    setSelectedRole(e.target.value)
  }

  React.useEffect(() => {
    setUserRole(user.id, selectedRole)
  }, [selectedRole])

  return (
    <TableRow
      hover
      key={user.id}
    >
      <TableCell padding="checkbox">
        <Checkbox
          value={user.id}
          name="isMember"
          onChange={handleChangeCheckbox}
        />
      </TableCell>
      <TableCell>
        <Box
          alignItems="center"
          display="flex"
        >
          <Avatar
            className={classes.avatar}
            src={user.profileImage}
          />

        </Box>
      </TableCell>
      <TableCell>
        {user.id}
      </TableCell>
      <TableCell>
        {`${user.firstName} ${user.lastName}`}
      </TableCell>
      <TableCell>
        {user.email}
      </TableCell>
      <TableCell>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="role"
            name={user.id}
            onChange={handleChange}
            value={selectedRole}
          >
            <FormControlLabel value="Developer" control={<Radio />} label="Developer" />
            <FormControlLabel value="Manager"
              control={<Radio />} label="Manager"
            />

          </RadioGroup>
        </FormControl>

      </TableCell>
    </TableRow>
  )
}

export default UserRow
