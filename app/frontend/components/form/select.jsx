import { useCallback } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { humanizeString } from '@helpers'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Select = ({ formik, field, options }) => {
  const onChange = useCallback(({ target }) => {
    formik.setFieldValue(field, target.value)
  }, [field])

  const classes = classNames(
    'col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8',
    'pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2',
    'focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm/6'
  )

  const iconClasses = classNames(
    'pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end',
    'text-gray-500 sm:size-4'
  )

  return (
    <div className="sm:col-span-4">
      <label htmlFor={field} className="block text-sm/6 font-medium text-gray-900">
        {humanizeString(field)}
      </label>
      <div className="mt-2 grid grid-cols-1">
        <select
          id={field}
          name={field}
          autoComplete={field}
          value={formik.values[field] || ''}
          className={classes}
          onChange={onChange}
        >
          {options.map(option => <option key={option}>{option}</option>)}
        </select>
        <ChevronDownIcon className={iconClasses} />
      </div>
    </div>
  )
}
Select.propTypes = {
  field: PropTypes.string.isRequired,
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    values: PropTypes.shape({}).isRequired
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Select
