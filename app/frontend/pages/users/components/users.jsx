import { useLoaderData, Outlet, Link } from 'react-router-dom'
import { Table, Card } from '@components'
import { userDecorator } from '@decorators'
import NewUserBtn from './newUserBtn.jsx'

const Users = () => {
  const data = useLoaderData()

  const show = id => (
    <Link to={`${id}`} className="text-sky-600 hover:text-sky-900">
      Show
    </Link>
  )

  const edit = id => (
    <Link to={`edit/${id}`} className="text-sky-600 hover:text-sky-900">
      Edit
    </Link>
  )

  const destroy = id => (
    <Link to={`delete/${id}`} className="text-red-600 hover:text-red-900">
      Delete
    </Link>
  )

  const table = [
    { name: 'Name', key: 'full_name' },
    { name: 'Email', key: 'email' },
    { name: 'Phone', key: 'phone' },
    { name: 'Role', key: 'role' },
    { name: 'Created At', key: 'created_at' },
    { name: 'Updated At', key: 'updated_at' },
    { name: '', key: 'id', action: show },
    { name: '', key: 'id', action: edit },
    { name: '', key: 'id', action: destroy }
  ]

  return (
    <>
      <Card title="List of users" action={<NewUserBtn />} >
        <Table table={table} data={userDecorator(data)} />
      </Card>
      <Outlet />
    </>
  )
}

export default Users
