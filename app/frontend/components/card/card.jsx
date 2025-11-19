import PropTypes from 'prop-types'

const Card = ({ children, title = '', action = nil }) => (
  <div className="bg-white shadow-sm rounded-lg">
    <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
      <div className="-mt-2 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="mt-2 ml-4">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="mt-2 ml-4 shrink-0">
          {action}
        </div>
      </div>
    </div>
    {children}
  </div>
)

Card.propTypes = {
  action: PropTypes.node,
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Card
