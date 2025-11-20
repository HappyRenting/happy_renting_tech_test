import axios from 'axios'
import { toast } from 'react-toastify'
import { headers } from './utils'

const formatParams = data => ({ user: { ...data } })

const getUsers = () => axios.get('/api/web/users.json', { headers } )
  .then(({ data }) => data).catch(() => toast.error('Oops...'))

const getUser = ({ params: { id } }) => axios.get(`/api/web/users/${id}.json`, { headers } )
  .then(({ data }) => data).catch(() => toast.error('Oops...'))

const updtateUser = (id, user) => axios.put(`/api/web/users/${id}.json`, formatParams(user), { headers } )
  .then(() => toast.success('User updated')).catch(() => toast.error('Oops...'))

const createUser = user => axios.post('/api/web/users.json', formatParams(user), { headers } )
  .then(() => toast.success('User created')).catch(() => toast.error('Oops...'))

export { getUsers, getUser, updtateUser, createUser }
