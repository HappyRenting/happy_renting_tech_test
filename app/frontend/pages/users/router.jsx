import { createBrowserRouter } from 'react-router-dom'
import { Loader, NotFound, ErrorBoundary } from '@components'
import { Users, User, NewUser, EditUser } from './components'
import { getUsers, getUser } from '@actions/userActions'

const router = createBrowserRouter([
  { path: '/*', element: <NotFound /> },
  {
    path: '/users',
    element: <Users />,
    errorElement: <ErrorBoundary />,
    loader: getUsers,
    HydrateFallback: Loader,
    children: [
      { path: ':id', element: <User />, loader: getUser },
      { path: 'new', element: <NewUser /> },
      { path: 'edit/:id', element: <EditUser />, loader: getUser }
    ]
  }
])

export default router
