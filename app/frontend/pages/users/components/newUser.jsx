import { useFormik } from 'formik'
import { useNavigate, useRevalidator } from 'react-router-dom'
import { Drawer } from '@components'
import { createUser } from '@actions/userActions'
import UserForm from './userForm'

const NewUser = () => {
  const navigate = useNavigate()
  const { revalidate } = useRevalidator()
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      role: 'member'
    },
    onSubmit: values => {
      createUser(values).then(() => {
        navigate('/users')
        revalidate()
      })
    }
  })

  return (
    <Drawer title="Create User" reload>
      <UserForm formik={formik} />
    </Drawer>
  )
}

export default NewUser
