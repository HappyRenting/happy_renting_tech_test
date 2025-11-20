import { useFormik } from 'formik'
import { useLoaderData } from 'react-router-dom'
import { updtateUser } from '@actions/userActions'
import { Drawer } from '@components'
import UserForm from './userForm'

const EditUser = () => {
  const data = useLoaderData()

  const formik = onClose => useFormik({
    initialValues: { ...data },
    onSubmit: values => updtateUser(data.id, values).then(() => onClose())
  })

  return (
    <Drawer title={`Edit ${data.full_name}`}>
      {onClose => <UserForm formik={formik(onClose)} />}
    </Drawer>
  )
}

export default EditUser
