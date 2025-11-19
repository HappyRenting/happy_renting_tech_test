import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({ children, onClick }) => {
  const classes = classNames(
    'relative inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold',
    'text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2',
    'focus-visible:outline-sky-600'
  )

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
