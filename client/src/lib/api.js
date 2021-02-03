import axios from 'axios'
import { getToken } from './auth'

//*Base URL for all
const baseUrl = '/api'

//*Sets a users token into the request header  
function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}
//*Get All Projects
export function getAllProjects() {
  return axios.get(`${baseUrl}/projects/`, headers())
}

//*Get Single Project
export function getSingleProject(id) {
  return axios.get(`${baseUrl}/projects/${id}/`, headers())
}

//*Create new Project
export function createProject(formdata) {
  return axios.post(`${baseUrl}/projects/`, formdata, headers())
}

//*Edit a Projects
export function editProject(id, formdata) {
  return axios.put(`${baseUrl}/projects/${id}/`, formdata, headers())
}

//*Delete a Projects
export function deleteProject(id) {
  return axios.delete(`${baseUrl}/projects/${id}/`, headers())
}

//*Get All Tickets
export function getAllTickets() {
  return axios.get(`${baseUrl}/tickets/`, headers())
}

//*Get Single Ticket
export function getSingleTicket(id) {
  return axios.get(`${baseUrl}/tickets/${id}/`, headers())
}

//*Create new Ticket
export function createTicket(formdata) {
  return axios.post(`${baseUrl}/tickets/`, formdata, headers())
}

//*Edit a Ticket
export function editTicket(id, formdata) {
  return axios.put(`${baseUrl}/tickets/${id}/`, formdata, headers())
}

//*Delete a Ticket
export function deleteTicket(id) {
  return axios.delete(`${baseUrl}/tickets/${id}/`, headers())
}

//*Get All Comments
export function getAllComments() {
  return axios.get(`${baseUrl}/comments/`, headers())
}

//*Get Single Comment
export function getSingleComment(id) {
  return axios.get(`${baseUrl}/comments/${id}/`, headers())
}

//*Create new Comment
export function createComment(formdata) {
  return axios.post(`${baseUrl}/comments/`, formdata, headers())
}

//*Edit a Comment
export function editComment(id, formdata) {
  return axios.put(`${baseUrl}/comments/${id}/`, formdata, headers())
}

//*Delete a Comment
export function deleteComment(id) {
  return axios.delete(`${baseUrl}/comments/${id}/`, headers())
}

//*Get All Roles and Groups
export function getAllGroups() {
  return axios.get(`${baseUrl}/groups/`, headers())
}

//*Post a group of Roles
export function assignRoles(arrFormdata) {
  arrFormdata.forEach(element => {
    return axios.post(`${baseUrl}/groups/`, element, headers())
  })
}

//*Get single User Profile
export function getSingleUser(id) {
  return axios.get(`${baseUrl}/auth/profile/${id}/`, headers())
}
//*Get all User Profiles
export function getAllUsers() {
  return axios.get(`${baseUrl}/auth/profiles/`, headers())
}
//*Update current User
export function updateUser(formdata) {
  return axios.put(`${baseUrl}/auth/profile/`, formdata, headers())
}

//* Register User
export function registerUser(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}
//* Login User
export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}

//* Get Current User Profile
export function getProfile() {
  return axios.get(`${baseUrl}/auth/profile/`, headers())
}
//* Get all Users
export function getUsers() {
  return axios.get(`${baseUrl}/auth/profiles/`, headers())
}