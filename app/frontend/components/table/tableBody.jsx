import PropTypes from 'prop-types'

const TableBody = ({ header, body }) => (
  <tbody className='divide-y divide-gray-200 bg-white'>
    {body.map((line, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <tr key={`${line.id}-${idx}`}>
        {header.map((col, index) => (
          <td
            // eslint-disable-next-line react/no-array-index-key
            key={`${col.key}-${idx}-${index}`}
            className={`p-3.5 text-sm text-left max-h-12 overflow-hidden ${col.classes}`}
          >
            {col.action ? col.action(line[col.key]) : line[col.key]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
)

TableBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  header: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default TableBody