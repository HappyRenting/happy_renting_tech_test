import { useFormik } from 'formik'
import { useLoaderData, useNavigate, useRevalidator } from 'react-router-dom'
import { updtateUser } from '@actions/userActions'
import { Drawer } from '@components'
import UserForm from './userForm'

const EditUser = () => {
  const navigate = useNavigate()
  const { revalidate } = useRevalidator()
  const data = useLoaderData()
  const formik = useFormik({
    initialValues: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      role: data.role
    },
    onSubmit: values => {
      updtateUser(data.id, values).then(() => {
        navigate('/users')
        revalidate()
      })
    }
  })

  return (
    <Drawer title={`Edit ${data.full_name}`} reload>
      <UserForm formik={formik} />
    </Drawer>
  )
}

export default EditUser
