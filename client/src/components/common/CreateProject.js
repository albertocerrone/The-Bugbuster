import React from 'react'
import { CreateProject } from '../../lib/api'
import { useHistory } from 'react-router-dom'


function newProject() {
  const [formdata, setFormdata] = React.useState('')

  
  const history = useHistory()

  async function newProject() {
    try {
      const newP = await CreateProject(formdata)
      console.log(newP)
      history.push('/projects')
    } catch (err) {
      console.log(err)
    }
  }



}

export default newProject