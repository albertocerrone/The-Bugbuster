/* eslint-disable no-unused-vars */
import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Avatar,
  Box,
  Card,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  form: {
    borderRadius: '45px',
    margin: theme.spacing(2)
  }
}))

const TableUsers = ({ className, users, ...rest }) => {
  const classes = useStyles()
  const { id } = useParams()
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(0)
  const [user, setUser] = React.useState(users)
  const [role, setRole] = React.useState({
    user: '',
    project: id,
    role: '',
    selected: ''
  })

  console.log({ role }, { user })

  const handleChange = (e) => {

    setRole({ ...role, [e.target.name]: e.target.value })
  }

  const handleSelectOne = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleLimitChange = (event) => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <form className={classes.form}>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                  </TableCell>
                  <TableCell>
                    Image
                  </TableCell>
                  <TableCell>
                    Id
                  </TableCell>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell>
                    Email
                  </TableCell>
                  <TableCell>
                    Select Role
                  </TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, limit).map((user) => (
                  <TableRow
                    hover
                    key={user.id}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        value={user.selected}
                        name="selected"
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
                      {!role ?
                        <p>loading...</p>
                        :
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="role" name="role"
                            // value={user.role}
                            // onChange={handleChange}

                          >
                            <FormControlLabel 
                              value="manager"
                              control={<Radio />} 
                              label="Manager"
                              onChange={handleChange}
                            />
                            <FormControlLabel 
                              value="developer" 
                              control={<Radio />} 
                              label="Developer" 
                              onChange={handleChange}
                            />
                          </RadioGroup>
                        </FormControl>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            mt={4}
          >
            <Button
              color="primary"
              variant="contained"
            >
              Add roles
            </Button>
          </Box>
        </form>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={users.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card >
  )
}

TableUsers.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
}

export default TableUsers
