import PropTypes from 'prop-types'

const ListItem = ({ item }) => (
  <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    <dt className="text-sm/6 font-medium text-gray-900">{item.label}</dt>
    <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{item.value}</dd>
  </div>
)

ListItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.node.isRequired
  }).isRequired
}

export default ListItem
