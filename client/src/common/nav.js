// import React from 'react'


// function Nav() {

//   const [userProfileData, setUserProfileData] = React.useState(null)

//   React.useEffect(() => {
//     const getData = async () => {
//       try { 
//         const { data } = await axios.get('api/userprofile', headers())
//         console.log(data)
//         data.basket.push('5')
//         setUserProfileData(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getData()

//   }, [1])


//   return (
//   )
// }

// export default Nav