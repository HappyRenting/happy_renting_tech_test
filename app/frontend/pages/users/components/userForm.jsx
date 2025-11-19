import PropTypes from 'prop-types'
import { Form, Input, Select } from '@components'

const UserForm = ({ formik }) => (
  <Form onSubmit={formik.handleSubmit}>
    <Input formik={formik} field="first_name" placeholder="Jean" />
    <Input formik={formik} field="last_name" placeholder="Dujardin" />
    <Input formik={formik} field="email" placeholder="jean.dujardin@mail.com" />
    <Input formik={formik} field="phone" placeholder="0656786435" />
    <Select formik={formik} field="role" options={['member', 'admin']} />
  </Form>
)

UserForm.propTypes = {
  formik: PropTypes.shape({
    handleSubmit: PropTypes.func.isRequired
  }).isRequired
}

export default UserForm
