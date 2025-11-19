import PropTypes from 'prop-types'

const tablePropTypes = PropTypes.arrayOf(
  PropTypes.exact({
    name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    classes: PropTypes.string
  })
)

export { tablePropTypes }
