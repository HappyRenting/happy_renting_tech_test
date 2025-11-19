import { useCallback } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { humanizeString } from '@helpers'

const Input = ({ formik, field, placeholder = '' }) => {
  const onChange = useCallback(({ target }) => {
    formik.setFieldValue(field, target.value)
  }, [field])

  const classes = classNames(
    'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1',
    '-outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2',
    'focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6'
  )

  return (
    <div className="sm:col-span-4">
      <label htmlFor={field} className="block text-sm/6 font-medium text-gray-900">
        {humanizeString(field)}
      </label>
      <div className="mt-2">
        <input
          type="text"
          id={field}
          placeholder={placeholder}
          value={formik.values[field] || ''}
          className={classes}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
Input.propTypes = {
  field: PropTypes.string.isRequired,
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    values: PropTypes.shape({}).isRequired
  }).isRequired,
  placeholder: PropTypes.string
}

export default Input
