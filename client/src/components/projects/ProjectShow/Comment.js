import { Grid, Typography, Box } from '@material-ui/core'
import React from 'react'

function Comment(comment) {

  return (
    <>
      <Box>

        <Grid
          container
          spacing={2}

        >
          <Grid item>
            <Typography
              color="textSecondary"
              variant="h6"
            >
              {`USER: ${comment.comment.owner.user.firstName} ${comment.comment.owner.user.lastName}`}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="textPrimary"
              variant="body"
              gutterBottom
            >
              {`CONTENT: ${comment.comment.content}`}
            </Typography>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Comment
