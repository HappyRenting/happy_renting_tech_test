import moment from 'moment'

const userDecorator = users => users.map(user => ({
  ...user,
  created_at: moment(user.created_at).format('YYYY-MM-DD HH:mm'),
  updated_at: moment(user.updated_at).format('YYYY-MM-DD HH:mm')
}))

export default userDecorator
