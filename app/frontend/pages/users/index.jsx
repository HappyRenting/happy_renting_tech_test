import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import router from './router'

const Users = () => (
  <>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      theme="colored"
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
)

export default Users
