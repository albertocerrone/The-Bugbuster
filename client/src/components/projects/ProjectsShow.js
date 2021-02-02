/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getSingleProject } from '../../lib/api'
// import { v4 as uuidv4 } from 'uuid'
import { isAuthenticated } from '../../lib/auth'

import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Tooltip,
  Fab
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

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
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  }
}))

function PokeShow() {
  const history = useHistory()
  const { id } = useParams()
  const [projectdata, setProjectdata] = React.useState(null)
  const [ unauthorized, setUnauthorized]  = React.useState(false)
  const [ notLoggedIn, setNotLoggedIn ] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  
  const classes = useStyles()

  const handleClick = () => {
    setOpen(!open)
  }

  //* get single item
  React.useEffect(() => {
    if (!isAuthenticated) return
    const getData = async () => {
      try { 
        const { data } = await getSingleProject(id)
        setProjectdata(data)
        console.log(data) 
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  },[id])
  
  // function getUserId(){
  //   const payload = getPayload()
  //   if (!payload) return false
  //   console.log( 'userId on pokeshow',payload.sub )
  //   return payload.sub
  // }  
  // getUserId()

  // const handleProjectDelete = async event => { //Delete Comments Logic 
  //   const commentId = event.target.value 
  //   try {
  //     await deleteComment(id, commentId)
  //     setCommentToDelete(event.target.value) 
  //   } catch (err) {
  //     if (err.response.data.message === 'Unauthorized') {
  //       setUnauthorized(true)
  //       return 
  //     }
  //   }
  // }
  

  return (
    <>
      {projectdata ? 
        <Typography
          align="left"
          color="textPrimary"
          variant="h1"
          style={{ margin: '0 0 0 10px' }}
        >
          {projectdata.name} 
        </Typography>
        : 
        'Loading...'
      }
      <section style={{ margin: '0 0 0 20px' }}>
        {projectdata ?
          <>
            <div>
              <p>Owner: </p>
              {projectdata.owner.firstName} {projectdata.owner.lastName} 
            </div>
            <div>
              <p>Description: </p>
              {projectdata.description}
            </div>
            <div>
              <p>Members: </p>
              {projectdata.members.length > 0 ? //ternary not needed in the current state but could change
                <>
                  <ul>
                    {projectdata.members.map(member => (
                      <li key={member.user.id}>{member.user.firstName} {member.user.lastName} - {member.role}</li>
                    ))}
                  </ul>
                </>
                :
                'This project doesn\'t have any members yet'
              }
            </div>
            <div>
              <p>Tickets: </p>
              {projectdata.tickets.length > 0 ? 
                <>
                  <ul>
                    {projectdata.tickets.map(ticket => (
                      <li key={ticket.id}> {ticket.title} -owner: {ticket.owner.user.firstName} {ticket.owner.user.lastName} -assigned to: {ticket.assignedUser.user.firstName} {ticket.assignedUser.user.lastName}</li>
                    ))}
                  </ul>
                </>
                :
                'This project doesn\'t have any tickets yet'
              }
            </div>
          </>
          : 
          'Loading...'
        }
      </section>
      <Tooltip
        title="Add Members"
        aria-label="add"
        enterDelay={400}
        leaveDelay={250}
      >
        <Fab
          color="secondary"
          size="large"
          className={classes.absolute}
          onClick={handleClick}
          component={Link} to={`/home/project/${id}/roles`}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  )
}

export default PokeShow

