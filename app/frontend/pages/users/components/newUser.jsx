import { useFormik } from 'formik'
import { Drawer } from '@components'
import { createUser } from '@actions/userActions'
import UserForm from './userForm'

const NewUser = () => {
  const formik = onClose => useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      role: 'member'
    },
    onSubmit: values => createUser(values).then(() => onClose())
  })

  return (
    <Drawer title="Create User" reload>
      {onClose => <UserForm formik={formik(onClose)} />}
    </Drawer>
  )
}

export default NewUser
