import PropTypes from 'prop-types'

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>
    <div className="mt-10 mb-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
      {children}
    </div>
    <button
      type="submit"
      className="relative inline-flex items-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
    >
      Submit
    </button>
  </form>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Form
