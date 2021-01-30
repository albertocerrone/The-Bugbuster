import React from 'react'
// import axios from 'axios'


function Login() {

  // // const [usernameValid, setUsernameValid] = React.useState('')
  // // const [emailValid, setEmailValid] = React.useState('')
  // // const [passwordValid, setPasswordValid] = React.useState('')
  // // const [yearValid, setYearValid] = React.useState('')
  // // const [codeValid, setCodeValid] = React.useState('')
  // // const [countryValid, setCountryValid] = React.useState('')
  // // const [postcodeValid, setPostcodeValid] = React.useState('')
  // const [formdata, setFormdata] = React.useState({
  //   email: '',
  //   password: ''
  // })

  // const handleChange = event => {
  //   setFormdata({ ...formdata, [event.target.name]: event.target.value })
  // }

  // const handleSubmit = async e => { 
  //   e.preventDefault()
  //   // console.log('etarget',e.target)

  //   try {
  //     const { data } = await loginUser(formdata)

  //     if (data.message === 'Unauthorized') {
  //       // setTimeout(()=>{
  //       //   e.target.classList.remove('shake') 
  //       // },500)
  //       console.log(data.message)
  //       return 
  //     }
  //     setTimeout(()=>{
  //       setToken(data.token)
  //       history.push('/')
  //     },500)

  //   } catch (err) {
  //     console.log(err)
  //     console.log('Sorry failure to load the login page')

  //     e.target.classList.remove('float_up')
  //     e.target.classList.add('shake')
  //     setTimeout(()=>{
  //       e.target.classList.remove('shake') 
  //     },500)
  //   }

  //   console.log('submitting', formdata)
  // }

  // function loginUser(formdata) {
  //   return axios.post('/api/login', formdata)
  // }

  // function setToken(token) {
  //   window.localStorage.setItem('token', token)
  // }



  return (
    <h1>This is the login page</h1>
  )

}

export default Login