import PropTypes from 'prop-types'
import ListItem from './listItem.jsx'

const DescriptionList = ({ items }) => (
  <div className="mt-6 border-t border-gray-100">
    <dl className="divide-y divide-gray-100">
      {items.map(item => <ListItem key={item.label} item={item} />)}
    </dl>
  </div>
)

DescriptionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
}

export default DescriptionList
