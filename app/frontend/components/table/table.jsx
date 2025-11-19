import TabeleHeader from './tableHeader'
import TableBody from './tableBody'
import PropTypes from 'prop-types'

const Table = ({ table, data }) => (
  <div className="max-w-screen">
    <table className="min-w-full divide-y divide-gray-300 table-fixed">
      <TabeleHeader header={table} />
      <TableBody header={table} body={data} />
    </table>
  </div>
)

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  table: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Table